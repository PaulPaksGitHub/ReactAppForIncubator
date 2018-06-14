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
        <ul>
          <li>6/5 @ Evergreens</li>
          <li>6/8 vs Kickers</li>
          <li>6/14 @ United</li>
        </ul>
      </div>
    )
  }
}
export default Profile;
