import { SET_APP, SET_ITEM, SET_CATEGORY, ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setApp = app => ({
  type: SET_APP,
  payload: { app }
});

export const setItem = item => ({
  type: SET_ITEM,
  payload: { item }
});

export const setCategory = category => ({
  type: SET_CATEGORY,
  payload: { category }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
