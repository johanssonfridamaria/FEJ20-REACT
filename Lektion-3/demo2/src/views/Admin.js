import React from 'react'
import auth from '../services/AuthService';
import { useHistory } from 'react-router-dom';

const Admin = () => {

  const history = useHistory();

  const handleClick = () => {
    auth.logout(() => {
      history.push('/')
    })
  }

  return (
    <div>
      <h1>Admin</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Admin
