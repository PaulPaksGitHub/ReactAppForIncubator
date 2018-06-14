import {Link} from 'react-router-dom'
import React from 'react'

const Header = () => (
  <div>
    <ul>
      <li><Link to='/'>На главную</Link></li>
      <li><Link to='/news'>Новости</Link></li>
      <li><Link to='/profile'>Профиль</Link></li>
    </ul>
  </div>
)
export default Header;
