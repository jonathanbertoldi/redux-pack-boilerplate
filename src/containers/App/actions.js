import { LOGIN } from './constants';
import { post } from '../../utils/request';

/**
 *
 * @param {object} data The user login data
 * @param {string} data.email The user login email
 * @param {string} data.password The user hashed password
 */
export function login(data) {
  return {
    type: LOGIN,
    promise: post('login', data),
  };
}
