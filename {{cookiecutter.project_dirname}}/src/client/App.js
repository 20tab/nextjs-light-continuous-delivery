import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import store from './store'
import Routes from './Routes'
import history from './store/history'
import defaultTheme from './styles/themes/default'
import ScrollToTop from './components/ScrollToTop'

export default () => {
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
