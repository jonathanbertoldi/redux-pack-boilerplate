import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';

export function createRootReducer(injectedResources) {
  return combineReducers({
    router: routerReducer,
    ...injectedResources,
  });
}
