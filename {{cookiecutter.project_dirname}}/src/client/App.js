import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import store from './store'
import Routes from './Routes'
import history from './store/history'
import theme from './styles/themes/light'
import GlobalStyle from './styles/GlobalStyle'
import ScrollToTop from './components/ScrollToTop'

export default () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router history={history} forceRefresh={false}>
          <ScrollToTop>
            <Routes />
          </ScrollToTop>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}
