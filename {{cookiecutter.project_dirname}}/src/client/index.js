import React from 'react'
import ReactDOM from 'react-dom'

import './styles/global.css'
import App from './App'

const MOUNT_NODE = document.getElementById('root')

const render = () => {
  ReactDOM.render(<App />, MOUNT_NODE)
}

if (module.hot && window.NODE_ENV !== 'production') {
  module.hot.accept('./App', () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE)
    render()
  })
}

render()
