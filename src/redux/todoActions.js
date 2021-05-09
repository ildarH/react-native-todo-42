import {Http} from './../http';
import {
  ADD_TODO,
  DELETE_TODO,
  SHOW_ERROR,
  HIDE_ERROR,
  SHOW_LOADER,
  HIDE_LOADER,
  UPDATE_TODO,
  FETCH_TODOS,
  CHANGE_PRIORITY,
  TOGGLE_DONE,
} from './types';
export const addTodo = todo => async dispatch => {
  const data = await Http.post('todos.json', {...todo});
  dispatch({type: ADD_TODO, todo, key: data.name});
};
export const deleteTodo = key => async dispatch => {
  await Http.delete(`todos/${key}.json`);
  dispatch({type: DELETE_TODO, key});
};
export const fetchAllTodos = () => async dispatch => {
  showLoader();
  hideError();
  try {
    const data = await Http.get('todos.json');
    const todos = Object.keys(data).map(k => ({...data[k], key: k}));
    dispatch({type: FETCH_TODOS, todos});
  } catch (error) {
    showError(error);
  }
};
export const updateTodo = (key, text) => async dispatch => {
  await Http.patch(`todos/${key}.json`, {text});
  dispatch({type: UPDATE_TODO, key, text});
};
export const showLoader = () => async dispatch => {
  await dispatch({type: SHOW_LOADER});
};
export const hideLoader = () => async dispatch => {
  await dispatch({type: HIDE_LOADER});
};
export const showError = error => async dispatch => {
  console.log('showError: ', error);
  await dispatch({type: SHOW_ERROR, error});
};
export const hideError = () => async dispatch => {
  await dispatch({type: HIDE_ERROR});
};
export const toggleTodo = key => async dispatch => {
  await Http.patch(`todos/${key}.json`);
  dispatch({type: TOGGLE_DONE, payload: key});
};
