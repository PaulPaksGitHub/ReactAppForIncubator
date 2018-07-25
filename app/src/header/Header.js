import {Link} from 'react-router-dom'
import React from 'react'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './noch.css'

const Header = () => (
  <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="default">
            <Link to='/' className="noch"><Button variant="text" color="inherit" >На главную</Button></Link>
            <Link to='/news' className="noch"><Button variant="text" color="inherit">Новости</Button></Link>
            <Link to='/profile' className="noch"><Button variant="text" color="inherit">Профиль</Button></Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
)
export default Header;
