import { POST_LOGIN } from './constants';
import { post } from '../../utils/request';
import { setLocalStorageUser } from '../../utils/userUtils';

/**
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
