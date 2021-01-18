import React from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/authenticate';

const Login = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch(login())

    try { history.push(history.location.state.from.pathname) }
    catch { history.push('/') }
  }

  return (
    
    <div>
      <h1>LOGIN</h1>
      <button onClick={handleClick}>login</button>
    </div>
  )
}

export default Login
