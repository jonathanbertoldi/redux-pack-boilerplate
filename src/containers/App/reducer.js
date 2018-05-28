import { handle } from 'redux-pack';

import { POST_LOGIN, LOGOUT } from './constants';
import { getLocalStorageUser } from '../../utils/userUtils';

const initialState = {
  loading: false,
  error: null,
  user: getLocalStorageUser(),
};

function appReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case POST_LOGIN:
      return handle(state, action, {
        start: (prevState) => ({
          ...prevState,
          loading: true,
          error: null,
          user: null,
        }),
        finish: (prevState) => ({
          ...prevState,
          loading: false,
        }),
        failure: (prevState) => ({
          ...prevState,
          error: payload,
        }),
        success: (prevState) => ({
          ...prevState,
          user: payload,
        }),
      });
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

export default appReducer;
