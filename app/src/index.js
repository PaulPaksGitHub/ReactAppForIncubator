import ReactDOM from 'react-dom'
import React from 'react'
import App from './App.js'
import {HashRouter} from 'react-router-dom'

localStorage.setItem('logged', 'false');

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('site'))
