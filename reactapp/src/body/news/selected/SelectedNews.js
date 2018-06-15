import {Link} from 'react-router-dom'
import React from 'react'
import NewsList from '../NewsList.js'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import './noch.css'

const SelectedNews = (props) => {
  const foundNew = NewsList.get(
    parseInt(props.match.params.number, 10)
  )
  if (!foundNew) {
    return <div>This news not found</div>
  }
  return (
    <div>
      <Paper elevation={4}>
        <Typography variant="headline" component="h2">
          {foundNew.header}
        </Typography>

        <Typography component="p">
          {foundNew.text}
        </Typography>
        <Link to='/news' className="noch"><Button variant="text" color="inherit">Назад</Button></Link>
      </Paper>
    </div>
  )
}
export default SelectedNews;
