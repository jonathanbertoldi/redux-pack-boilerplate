import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '../../components/PrivateRoute';
import LoginPage from '../LoginPage';
import HomePage from '../HomePage';
import PostPage from '../PostPage';

const App = () => (
  <Switch>
    <Route path="/login" component={LoginPage} />
    <Route path="/posts" component={PostPage} />
    <PrivateRoute path="/home" component={HomePage} />
  </Switch>
);

export default App;
