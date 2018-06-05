import { handle } from 'redux-pack';
import { LOAD_POSTS, ADD_POST, LIKE_POST } from './constants';

const initialState = {
  isLoading: false,
  error: null,
  items: [],
};

export default function postsReducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case LOAD_POSTS:
      return handle(state, action, {
        start: (prevState) => ({ ...prevState, isLoading: true, error: null }),
        finish: (prevState) => ({ ...prevState, isLoading: false }),
        failure: (prevState) => ({ ...prevState, error: payload }),
        success: (prevState) => ({ ...prevState, items: payload }),
      });
    case ADD_POST:
      return handle(state, action, {
        start: (prevState) => ({ ...prevState, isLoading: true, error: null }),
        finish: (prevState) => ({ ...prevState, isLoading: false }),
        success: (prevState) => ({
          ...prevState,
          items: prevState.items.concat(payload),
        }),
        failure: (prevState) => ({ ...prevState, error: payload }),
      });
    case LIKE_POST:
      return handle(state, action, {
        start: (prevState) => ({ ...prevState, isLoading: true, error: null }),
        finish: (prevState) => ({ ...prevState, isLoading: false }),
        failure: (prevState) => ({ ...prevState, error: payload }),
      });
    default:
      return state;
  }
}
