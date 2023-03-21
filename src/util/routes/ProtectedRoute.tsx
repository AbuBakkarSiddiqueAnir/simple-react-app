import React from 'react';
import { Route, redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      isAuthenticated === true
        ? <Component {...props} />
        : <redirect to='/login' />
    )} />
  )
}

export default ProtectedRoute;