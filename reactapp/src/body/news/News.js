import {Switch, Route} from 'react-router-dom'
import React from 'react'
import SelectedNews from './selected/SelectedNews.js'
import NewsMenu from './menu/NewsMenu.js'

const News = () => (
  <Switch>
    <Route exact path='/news' component={NewsMenu}/>
    <Route path='/news/:number' component={SelectedNews}/>
  </Switch>
)
export default News;
