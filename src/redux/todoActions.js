import {Http} from './../api/http';
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
export const updateTodo = (key, updatedTodo) => async dispatch => {
  await Http.patch(`todos/${key}.json`, { ...updatedTodo });
  dispatch({type: UPDATE_TODO, key, payload: updatedTodo});
};
export const updateAllTodos = () => async dispatch => {
  await Http.post(`todos.json`)
}
export const showLoader = () => async dispatch => {
  await dispatch({type: SHOW_LOADER});
};
export const hideLoader = () => async dispatch => {
  await dispatch({type: HIDE_LOADER});
};
export const showError = error => async dispatch => {
  await dispatch({type: SHOW_ERROR, error});
};
export const hideError = () => async dispatch => {
  await dispatch({type: HIDE_ERROR});
};
export const toggleTodo = (key, done) => async dispatch => {
  await Http.patch(`todos/${key}.json`, {done});
  dispatch({type: TOGGLE_DONE, payload: key});
};
export const togglePriority = (key, priority) => async dispatch => {
  await Http.patch(`todos/${key}`, {priority});
  dispatch({type: CHANGE_PRIORITY, payload: priority})
}
