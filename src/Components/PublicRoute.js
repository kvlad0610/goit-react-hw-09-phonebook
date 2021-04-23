import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PublicRoute({
  component: Component,
  redirectTo,
  ...routeProps
}) {
  const authSelector = useSelector(state => state.user.token);
  return (
    <Route
      {...routeProps}
      render={props =>
        authSelector ? <Redirect to={redirectTo} /> : <Component {...props} />
      }
    />
  );
}
