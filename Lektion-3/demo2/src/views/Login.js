import React from 'react'
import auth from '../services/AuthService';
import { useHistory } from 'react-router-dom';

const Login = () => {

  const history = useHistory();

  return (
    <div>
      <h1>Login</h1>
      <button onClick={
        () => {
          auth.login(() => {
            
            // if(history.location.state)
            //   history.push(history.location.state.from.pathname)
            // else
            //   history.push('/')
            
            try { history.push(history.location.state.from.pathname) }
            catch { history.push('/') }

          })
        }
      }>Login</button>
    </div>
  )
}

export default Login
