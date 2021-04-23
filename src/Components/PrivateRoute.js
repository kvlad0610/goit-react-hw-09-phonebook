import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { Component } from 'react';

export default function PrivateRoute({
  component: Component,
  redirectTo,
  ...routeProps
}) {
  const authSelector = useSelector(state => state.user.token);
  return (
    <Route
      {...routeProps}
      render={props =>
        authSelector ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
}
