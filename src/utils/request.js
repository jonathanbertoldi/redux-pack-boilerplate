import axios from 'axios';

const API = 'https://json-server-jwt.herokuapp.com';

export const get = (url) =>
  request(url, {
    method: 'GET',
  });

export const post = (url, data) =>
  request(url, {
    method: 'POST',
    data,
  });

export const patch = (url, data) =>
  request(url, {
    method: 'PATCH',
    data,
  });

// eslint-disable-next-line
export const remove = (url, id) =>
  request(url, {
    method: 'DELETE',
  });

// eslint-disable-next-line
export const request = (
  url,
  {
    contentType = 'application/json',
    authorization = localStorage.getItem('token'),
    ...customOptions
  },
) => {
  const headers = {};

  if (contentType) {
    headers['Content-type'] = contentType;
  }

  if (authorization) {
    headers['Authorization'] = authorization; // eslint-disable-line
  }

  const options = {
    ...customOptions,
    headers,
  };

  return axios(`${API}/${url}`, options)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.message);
    });
};
