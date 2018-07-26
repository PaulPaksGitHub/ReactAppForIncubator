import {Link} from 'react-router-dom'
import React from 'react'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { inject, observer } from 'mobx-react';

@inject("store")
@observer
export default class extends React.Component{
  render(){
    return(
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="default">
              <Link to='/'><Button variant="text" color="inherit" >Home</Button></Link>
              <Link to='/login'><Button variant="text" color="inherit" >Profile</Button></Link>
              <Link to='/news'><Button variant="text" color="inherit" >News</Button></Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}