import { POST_LOGIN, LOGOUT, VERIFY_LOGIN } from './constants';
import { post, get } from '../../utils/request';
import {
  setLocalStorageUser,
  // removeLocalStorageUser,
} from '../../utils/userUtils';

/**
 * Dispatches the action to get the token from the backend
 *
 * @param {object} data The user login data
 * @param {string} data.email The user login email
 * @param {string} data.password The user hashed password
 */
export function postLogin(data) {
  return {
    type: POST_LOGIN,
    promise: post('login', data),
    meta: {
      onSuccess: (response) => setLocalStorageUser(response),
    },
  };
}

/**
 * Dispatches the action to verify the current user token,
 * getting the token from the localstorage
 */
export function verifyToken() {
  return {
    type: VERIFY_LOGIN,
    promise: get('verify'),
    // meta: {
    //   onFailure: () => removeLocalStorageUser(),
    // },
  };
}

/**
 * Dispatches the action to logout the current user
 */
export function logout() {
  return {
    type: LOGOUT,
  };
}
