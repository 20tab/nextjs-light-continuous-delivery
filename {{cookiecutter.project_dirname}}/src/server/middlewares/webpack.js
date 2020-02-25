var webpack = require('webpack')
var path = require('path')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')

var webpackConfig = require('../../../webpack/webpack.dev')
var compiler = webpack(webpackConfig)

module.exports = app => {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(__dirname, '../../client'),
    stats: {
      colors: true
    }
  }))

  app.use(webpackHotMiddleware(compiler))
}
