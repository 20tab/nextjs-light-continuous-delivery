const express = require('express')
const exphbs = require('express-handlebars')
const basicAuth = require('express-basic-auth')
const compression = require('compression')
const path = require('path')

const app = express()

if (process.env.NODE_ENV === 'production') {
  // Use basic auth
  if ((
    process.env.DJANGO_CONFIGURATION === 'Development' ||
    process.env.DJANGO_CONFIGURATION === 'Integration' ||
    process.env.DJANGO_CONFIGURATION === 'Production') &&
    process.env.BASIC_AUTH_USER &&
    process.env.BASIC_AUTH_PASSWORD
  ) {
    app.use(basicAuth({
      challenge: true,
      authorizeAsync: true,
      authorizer: (username, password, cb) => {
        if (username === process.env.BASIC_AUTH_USER && password === process.env.BASIC_AUTH_PASSWORD) {
          return cb(null, true)
        } else {
          return cb(null, false)
        }
      }
    }))
  }

  // Use compression
  app.use(compression())
}

// App view engine
const handlebarsOptions = {
  extname: '.hbs',
  helpers: {
    json: function (context) {
      try {
        const str = JSON.stringify(context)
        return str
      } catch (e) {
        return ''
      }
    },
    isEquals: function (val1, val2) {
      return val1 === val2
    }
  }
}

app.set('views', path.resolve(__dirname, 'public/html'))
app.engine('.hbs', exphbs(handlebarsOptions))
app.set('view engine', '.hbs')

// Webpack middleware
if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('./middlewares/webpack')
  webpackMiddleware(app)
}

// Serve static files
app.use('/public', express.static(path.resolve(__dirname, './public')))

// Serve robots.txt
let robotsPath = './public/files/robots_alpha.txt'

if (process.env.DJANGO_CONFIGURATION === 'Integration') {
  robotsPath = './public/files/robots_integration.txt'
} else if (process.env.DJANGO_CONFIGURATION === 'Production') {
  robotsPath = './public/files/robots_production.txt'
}

app.use('/robots.txt', express.static(path.resolve(__dirname, robotsPath)))

// Serve always index.hbs
app.get('*', (req, res) => {
  res.render('index', {
    layout: false,
    ENV: {
      NODE_ENV: process.env.NODE_ENV
    }
  })
})

app.listen(3000, () => {
  console.log('App listening on port 3000')
})
