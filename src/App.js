import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './home'
import WorkHistoryPage from './WorkHistoryPage'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work-history" component={WorkHistoryPage} />
        </Switch>
      </Router>


    )
  }
}

export default App
