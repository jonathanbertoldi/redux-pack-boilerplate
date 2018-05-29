import { createSelector } from 'reselect';

export const selectPosts = ({ global }) => ({ global });

export const makeSelectPosts = () =>
  createSelector(selectPosts, ({ posts }) => ({ posts }));

export const makeSelectPostsLoading = () =>
  createSelector(selectPosts, ({ loading }) => ({ loading }));

export const makeSelectError = () =>
  createSelector(selectPosts, ({ error }) => ({ error }));
