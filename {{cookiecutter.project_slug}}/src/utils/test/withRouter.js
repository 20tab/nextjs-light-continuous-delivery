import React from 'react'
import { Router } from 'react-router-dom'

import history from '../../store/history'

export default ComposedComponent => {
  return (
    <Router history={history} forceRefresh={false}>
      <ComposedComponent />
    </Router>
  )
}
