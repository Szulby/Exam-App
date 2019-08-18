import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App'
import User from './pages/user'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './css/index.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Router>
    <Route path="/" exact component={App} />
    <Route path="/user/:id" component={User} />
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
