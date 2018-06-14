import {Link} from 'react-router-dom'
import React from 'react'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>General</Link></li>
        <li><Link to='/news'>News</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
      </ul>
    </nav>
  </header>
)
export default Header;
