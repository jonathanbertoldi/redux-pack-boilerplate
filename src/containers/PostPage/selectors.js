import { createSelector } from 'reselect';

export const selectPosts = ({ posts }) => ({ posts });

export const makeSelectPosts = () =>
  createSelector(selectPosts, ({ posts }) => [...posts.items]);

export const makeSelectPostsLoading = () =>
  createSelector(selectPosts, ({ loading }) => loading);

export const makeSelectError = () =>
  createSelector(selectPosts, ({ error }) => error);
