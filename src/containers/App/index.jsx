import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../HomePage';

const App = () => (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
);

export default App;
