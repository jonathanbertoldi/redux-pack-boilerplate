import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import { configureStore } from './store';

import App from './containers/App';

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

const WrappedApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<WrappedApp />, document.getElementById('root'));
