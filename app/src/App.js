import React from 'react'
import Header from './Header'
import Body from './Body'
import News from './News'

import {HashRouter} from 'react-router-dom'

import { Provider } from 'mobx-react'
import store from './store/store.js'

export default class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <HashRouter>
          <div>
            <Header />
            <Body />
          </div>
        </HashRouter>
      </Provider>
    )
  }
} 
