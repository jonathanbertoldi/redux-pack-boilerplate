import { LOAD_POSTS, ADD_POST, LIKE_POST } from './constants';
import { get, post, patch } from '../../utils/request';

export function loadPosts() {
  return {
    type: LOAD_POSTS,
    promise: get('posts'),
  };
}

export function addPost(content) {
  return {
    type: ADD_POST,
    promise: post('posts', content),
  };
}

export function likePost(patchedPost) {
  return {
    type: LIKE_POST,
    promise: patch(`posts/${patchedPost.id}`, patchedPost),
  };
}
