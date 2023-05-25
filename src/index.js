import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import HomePage from './views/home-page'
import HomePageBWOn from './views/home-page-bw-on'
import YourProfile from './views/your-profile'
import Page2 from './views/page2'
import Page3 from './views/page3'
import Page4 from './views/page4'
import Page5 from './views/page5'
import Page6 from './views/page6'
import Page7 from './views/page7'
import Page8 from './views/page8'
import Page9 from './views/page9'
import Page10 from './views/page10'
import Page11 from './views/page11'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={HomePage} exact path="/" />
        <Route component={HomePageBWOn} exact path="/home-page-bw-on" />
        <Route component={YourProfile} exact path="/your-profile" />
        <Route component={Page2} exact path="/page2" />
        <Route component={Page3} exact path="/page3" />
        <Route component={Page4} exact path="/page4" />
        <Route component={Page5} exact path="/page5" />
        <Route component={Page6} exact path="/page6" />
        <Route component={Page7} exact path="/page7" />
        <Route component={Page8} exact path="/page8" />
        <Route component={Page9} exact path="/page9" />
        <Route component={Page10} exact path="/page10" />
        <Route component={Page11} exact path="/page11" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
