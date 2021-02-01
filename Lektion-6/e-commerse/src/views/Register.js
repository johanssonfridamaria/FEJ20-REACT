import { useRef } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../store/actions/userActions';

const Register = () => {

  const dispatch = useDispatch();

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    if(firstName.current.value !== '' && lastName.current.value !== '' && email.current.value !== '' && password.current.value !== ''){
      dispatch(registerUser({
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        email: email.current.value,
        password: password.current.value
      }))
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="text-center">
        <h1>Register</h1>
      </div>
      <div className="row">
        <div className="col-6">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text" className="form-control" id="firstName" ref={firstName}/>
        </div>
        <div className="col-6">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="lastName" ref={lastName}/>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-7">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" ref={email}/>
        </div>
        <div className="col-5">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" ref={password}/>
        </div>
      </div>

      <small>Already a member? <Link to="/login">Login</Link></small> <br/>
      <button className="btn btn-info mt-3">register</button>
      
    </form>
  )
}

export default Register
