import { createStore, applyMiddleware, compose } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import { routerMiddleware } from 'react-router-redux';
import { createRootReducer } from '../reducers';

export function configureStore(initialState = {}, history) {
  const middlewares = [reduxPackMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          shouldHotReload: false,
        })
      : compose;
  /* eslint-enable */

  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(...enhancers),
  );

  // Extensions
  store.injectedReducers = {}; // Reducer registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(createRootReducer(store.injectedReducers));
    });
  }

  return store;
}
