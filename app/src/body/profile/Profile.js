import React from 'react'
import {Redirect} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Profile = () => {
  const logged = localStorage.getItem('logged');
  if (logged === 'false'){
    return (
      <Redirect to="/login" />
    )
  } else {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="primary">
              Профиль
            </Typography>
          </Toolbar>
        </AppBar>

        <Paper elevation={4}>
          <Typography variant="headline" component="h2">
            Паксеев Павел Владимирович
          </Typography>

          <Typography component="p">
            <p>19 лет, родился 6 марта 1999</p>
            <p>Почтовый адрес: pakseev.1999@gmail.com</p>
            <h3>Навыки:</h3>
            <ul>
              <li>Веб-програмирование</li>
              <li>SQL базы данных</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Pyhton 3</li>
              <li>C++</li>
              <li>HTML</li>
              <li>Git</li>
            </ul>
            <h3>Знание языков:</h3>
            <ul>
              <li>Русский — родной</li>
              <li>Английский — читаю профессиональную литературу</li>
            </ul>
          </Typography>
        </Paper>
      </div>
    )
  }
}
export default Profile;
