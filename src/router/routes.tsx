import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { App } from 'store/types'
import Home from 'pages/home';

const Router: React.FC = () => {
  const isAuthenticated = useSelector(state:App => state.auth.isAuthenticated);

  return (
    <Switch>
      <Route path="/home" component={Home} exact />
    </Switch>
  );
};

export default Router;
