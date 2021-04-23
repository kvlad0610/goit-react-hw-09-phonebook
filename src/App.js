import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import AppBar from './Components/AppBar/AppBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from './reducer/auth/operations';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import './App.css';

const Home = lazy(() =>
  import('./Components/Home/Home' /*WebpackChunkName: "home-page"*/),
);

const Contacts = lazy(() =>
  import(
    './Components/Phonebook/PhonebookPage/PhonebookPage' /*WebpackChunkName: "contacts-page"*/
  ),
);
const Register = lazy(() =>
  import(
    './Components/UserMenu/Register' /*WebpackChunkName: "register-page"*/
  ),
);
const Login = lazy(() =>
  import('./Components/UserMenu/Login' /*WebpackChunkName: "login-page"*/),
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>Load...</h1>}>
        <Switch>
          <Route path={routes.home} exact component={Home} />
          <PrivateRoute
            path={routes.contacts}
            exact
            component={Contacts}
            redirectTo={routes.login}
          />
          <PublicRoute
            path={routes.register}
            component={Register}
            redirectTo={routes.contacts}
          />
          <PublicRoute
            path={routes.login}
            component={Login}
            redirectTo={routes.contacts}
          />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
