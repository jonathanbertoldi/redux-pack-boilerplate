import { isEmpty } from 'lodash';

/**
 * Gets previously logged user from localStorage
 *
 * @returns {{email: string, token: string}} User saved in localstorage
 */
export function getLocalStorageUser() {
  const email = localStorage.getItem('email');
  const token = localStorage.getItem('token');

  if (isEmpty(email) || isEmpty(token)) return null;

  return { email, token };
}

/**
 * Sets logged user in localStorage
 *
 * @param {object} user User info
 * @param {string} user.email User login email
 * @param {string} user.token User JWT token
 */
export function setLocalStorageUser({ email, token }) {
  localStorage.setItem('email', email);
  localStorage.setItem('token', token);
}
