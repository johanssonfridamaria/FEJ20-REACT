import actiontypes from '../actiontypes';

export const login = () => {
  return {
    type: actiontypes().auth.login,
    payload: true
  }
}

export const logout = () => {
  return {
    type: actiontypes().auth.logout,
    payload: false
  }
}