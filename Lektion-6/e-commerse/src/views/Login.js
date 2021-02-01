import { useRef } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions/userActions';

const Login = () => {

  const dispatch = useDispatch();

  const email = useRef();
  const password = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(login(email.current.value, password.current.value))
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="text-center">
        <h1>Login</h1>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input type="email" className="form-control" id="email" ref={email}/>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" ref={password}/>
      </div>
      <small>Not a user? <Link to="/register">register</Link></small> <br/>
      <button className="btn btn-info mt-3">Login</button>
      
    </form>
  )
}

export default Login
