import {Switch, Route} from 'react-router-dom'
import React from 'react'
import Profile from './profile/Profile.js'
import General from './general/General.js'
import News from './news/News.js'
import Login from './login/Login.js'


const Body = () => (
  <main>
    <Switch>
      <Route exact path='/' component={General}/>
      <Route path='/news' component={News}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/login' component={Login}/>
    </Switch>
  </main>
)
export default Body;
