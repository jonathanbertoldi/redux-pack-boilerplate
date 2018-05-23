import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '../../components/PrivateRoute';
import LoginPage from '../LoginPage';
import HomePage from '../HomePage';

const App = () => (
  <Switch>
    <Route path="/login" component={LoginPage} />
    <PrivateRoute path="/home" component={HomePage} />
  </Switch>
);

export default App;
