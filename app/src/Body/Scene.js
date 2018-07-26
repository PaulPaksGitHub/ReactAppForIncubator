import {Switch, Route} from 'react-router-dom'
import React from 'react'
import General from './General'
import Authentification from './Authentification'
import News from './News'
import SelectedNews from './SelectedNews';

export default class extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={General}/>
                    <Route exact path='/login' component={Authentification}/>
                    <Route exact path='/news' component={News}/>
                    <Route exact path='/news/:number' component={SelectedNews}/>
                </Switch>
            </div>
        )
    }
}