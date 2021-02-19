import { SET_APP, SET_USER, SET_ITEM, SET_CATEGORY } from "./actionTypes";

export const setApp = app => ({
  type: SET_APP,
  payload: { app }
});

export const setUser = user => ({
  type: SET_USER,
  payload: { user }
});

export const setItem = item => ({
  type: SET_ITEM,
  payload: { item }
});

export const setCategory = category => ({
  type: SET_CATEGORY,
  payload: { category }
});
