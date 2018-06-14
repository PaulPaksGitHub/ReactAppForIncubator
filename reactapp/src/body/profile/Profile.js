import React from 'react'
import {Redirect} from 'react-router-dom'

const Profile = () => {
  const logged = localStorage.getItem('logged');
  if (logged === 'false'){
    return (
      <Redirect to="/login" />
    )
  } else {
    return (
      <div>
        <h2>Профиль</h2>
        <p>Паксеев Павел Владимирович</p>
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
      </div>
    )
  }
}
export default Profile;
