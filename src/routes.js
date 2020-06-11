import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './components/auth/Signup';
import Dashboard from './components/dashboard';
import Landing from './components/landing';
import LoginForm from './components/auth/Login';
import SignupForm from './components/auth/Form';
import EmailConfirmationSent from './components/auth/EmailConfirmationSent';
import ForgotPassword from './components/auth/ForgotPassword';

const BaseRouter = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/register/" component={Signup} />
    <Route exact path="/login/" component={LoginForm} />
    <Route exact path="/form/" component={SignupForm} />
    <Route
      exact
      path="/email-verification-sent/"
      component={EmailConfirmationSent}
    />
    <Route exact path = "/forgotpass" component={ForgotPassword} />

    <Route path="/dashboard/" component={Dashboard} />
  </Switch>
);

export default BaseRouter;
