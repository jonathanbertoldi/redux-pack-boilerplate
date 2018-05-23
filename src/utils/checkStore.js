import { conformsTo, isFunction, isObject } from 'lodash';
import invariant from 'invariant';

export default function checkStore(store) {
  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    injectedReducers: isObject,
  };

  invariant(
    conformsTo(store, shape),
    '(src/utils...) injectors: Expected a valid redux store',
  );
}
