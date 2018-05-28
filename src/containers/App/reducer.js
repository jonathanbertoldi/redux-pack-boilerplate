import { handle } from 'redux-pack';

import { POST_LOGIN, LOGOUT, VERIFY_LOGIN } from './constants';
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
    case VERIFY_LOGIN:
      return handle(state, action, {
        start: (prevState) => ({
          ...prevState,
          loading: true,
          error: null,
        }),
        finish: (prevState) => ({
          ...prevState,
          loading: false,
        }),
        failure: (prevState) => ({
          ...prevState,
          error: payload,
          user: null,
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
