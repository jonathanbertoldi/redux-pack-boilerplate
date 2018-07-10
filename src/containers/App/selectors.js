import { createSelector } from 'reselect';

export const selectGlobal = ({ global }) => global;

export const makeSelectUser = () =>
  createSelector(selectGlobal, ({ user }) => user);

export const makeSelectLoading = () =>
  createSelector(selectGlobal, ({ loading }) => loading);

export const makeSelectError = () =>
  createSelector(selectGlobal, ({ error }) => error);
