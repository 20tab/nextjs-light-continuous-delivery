import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'

export default _ => {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='*' component={NotFound} />
    </Switch>
  )
}
