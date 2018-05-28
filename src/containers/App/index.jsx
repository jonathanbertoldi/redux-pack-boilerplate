import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoute from '../../components/PrivateRoute';
import LoginPage from '../LoginPage';
import HomePage from '../HomePage';
import ContactPage from '../ContactPage';
import AboutPage from '../AboutPage';

const App = () => (
  <Switch>
    <Route path="/login" component={LoginPage} />
    <PrivateRoute path="/home" component={HomePage} />
    <PrivateRoute path="/contact" component={ContactPage} />
    <PrivateRoute path="/about" component={AboutPage} />
    <Redirect from="/" to="/home" />
  </Switch>
);

export default App;
