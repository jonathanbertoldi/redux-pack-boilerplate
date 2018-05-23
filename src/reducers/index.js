import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import globalReducer from '../containers/App/reducer';

export function createRootReducer(injectedResources) {
  return combineReducers({
    router: routerReducer,
    global: globalReducer,
    ...injectedResources,
  });
}
