import actiontypes from '../actiontypes';
import axios from 'axios';

export const login = (email, password) => {
  return async dispatch => {
    const res = await axios.post('http://localhost:9999/api/users/login', {email, password})
    // console.log(res.data.token)
    if(res.status === 200)
      dispatch(setUser(res.data.token));
  }
}

export const registerUser = user => {
  return async dispatch => {
    const res = await axios.post('http://localhost:9999/api/users/register', user)
    if(res.status === 201)
      dispatch(login(user.email, user.password))
  }
}

export const setUser = token => {
  return {
    type: actiontypes().user.set,
    payload: token
  }
}