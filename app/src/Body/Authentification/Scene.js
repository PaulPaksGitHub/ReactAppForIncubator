import React from 'react'
import {inject, observer} from 'mobx-react'

import Profile from './Profile'
import Login from './Login'

@inject("store")
@observer
export default class extends React.Component {
    render(){
        if (this.props.store.isUserLogged === true) {
            return ( <Profile /> ) 
        } else {
            return(
                <Login />
            )
        }
        
    }
}
