import React from 'react'
import { hashHistory, Route, Router, IndexRoute } from 'react-router'

import Main from './../components/Main'

export default (
  <Router history={hashHistory} > 
    <Route path='/' >
      <IndexRoute component={Main} />
    </Route>
  </Router>
)