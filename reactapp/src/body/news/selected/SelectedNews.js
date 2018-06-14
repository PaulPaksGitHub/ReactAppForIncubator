import {Link} from 'react-router-dom'
import React from 'react'
import NewsList from '../NewsList.js'

const SelectedNews = (props) => {
  const foundNew = NewsList.get(
    parseInt(props.match.params.number, 10)
  )
  if (!foundNew) {
    return <div>This news not found</div>
  }
  return (
    <div>
      <h1>{foundNew.header}</h1>
      <p>{foundNew.text}</p>
      <Link to='/news'>Back</Link>
    </div>
  )
}
export default SelectedNews;
