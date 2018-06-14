import {Link} from 'react-router-dom'
import React from 'react'
import NewsList from '../NewsList.js'

const NewsMenu = () => (
  <div>
    <ul>
      {
        NewsList.all().map(n => (
          <li key={n.id}>
            <Link to={`/news/${n.id}`}>{n.header}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)
export default NewsMenu;
