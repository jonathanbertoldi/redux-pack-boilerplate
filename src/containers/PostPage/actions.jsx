import { LOAD_POSTS, ADD_POST } from './constants';
import { get, post } from '../../utils/request';

export function loadPosts() {
  return {
    type: LOAD_POSTS,
    promise: get('posts'),
  };
}

export function addPost(content) {
  return {
    type: ADD_POST,
    promise: post('todos', content),
  };
}
