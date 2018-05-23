import { handle } from 'redux-pack';

import { LOGIN } from './constants';

const initialState = {
  loading: false,
  error: null,
  user: null,
};

function appReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
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
    default:
      return state;
  }
}

export default appReducer;
