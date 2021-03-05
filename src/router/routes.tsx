import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from 'store/reducers';
import Home from 'pages/home';
import Auth from 'pages/auth';
import { routes } from './declarations';

const Router: React.FC = () => {
  const isAuthenticated = useSelector((state:AppState) => state.auth.isAuthenticated);

  return (
    <Switch>
      <Route path={routes.home} component={Home} exact />
      <Route path={routes.auth} component={Auth} exact />
      <Redirect from="*" to={isAuthenticated ? routes.home : routes.auth} exact />
    </Switch>
  );
};

export default Router;
