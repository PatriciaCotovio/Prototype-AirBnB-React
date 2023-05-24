import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import HomePage from './views/home-page'
import Page from './views/page'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={HomePage} exact path="/" />
        <Route component={Page} exact path="/page" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
