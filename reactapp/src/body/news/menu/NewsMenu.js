import {Link} from 'react-router-dom'
import React from 'react'
import NewsList from '../NewsList.js'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './noch.css'

const NewsMenu = () => (
  <div>
    <List component="nav">
      {
        NewsList.all().map(n => (
          <ListItem button>
            <Link to={`/news/${n.id}`} className="noch"><ListItemText primary={n.header} /></Link>
          </ListItem>
        ))
      }
    </List>
  </div>
)
export default NewsMenu;
