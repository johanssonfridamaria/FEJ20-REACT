import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({component: Component, ...rest}) => {

  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Route {...rest} render={ props => {
      if(isAuth) {
        return <Component {...props} />
      } else {
        return <Redirect to={{pathname: '/login', state:{ from: props.location }}} />
      }
    }} />
  )
}
