import {Switch, Route} from 'react-router-dom'
import React from 'react'
import General from './General'
import Authentification from './Authentification'

export default class extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={General}/>
                    <Route exact path='/login' component={Authentification}/>
                </Switch>
            </div>
        )
    }
}