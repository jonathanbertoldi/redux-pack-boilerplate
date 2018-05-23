import { LOGIN } from './constants';

/**
 *
 * @param {object} data The user login data
 * @param {string} data.login The user login name
 * @param {string} data.password The user hashed password
 */
export function login(data) {
  return {
    type: LOGIN,
    promise: data,
  };
}
