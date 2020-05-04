import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
// import { Container } from './styles';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
