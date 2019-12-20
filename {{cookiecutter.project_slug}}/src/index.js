import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import './styles/global.css'
import ScrollToTop from './components/ScrollToTop'
import Routes from './Routes'
import store from './store'
import history from './store/history'
import defaultTheme from './styles/themes/default'
import * as serviceWorker from './serviceWorker'

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history} forceRefresh={false}>
        <ThemeProvider theme={defaultTheme}>
          <ScrollToTop>
            <Routes />
          </ScrollToTop>
        </ThemeProvider>
      </Router>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
