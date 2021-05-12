// import {Http} from './../api/http';
import {
  ADD_COLLECTION,
  FETCH_COLLECTION,
  RENAME_COLLECTION,
  DELETE_COLLECTION,
} from './types';

export const addCollection = collections => async dispatch => {
  dispatch({type: ADD_COLLECTION, collections});
};
export const fetchCollection = () => async dispatch => {
  await dispatch({type: FETCH_COLLECTION});
};
export const deleteCollection = collection => async dispatch => {
  await dispatch({type: DELETE_COLLECTION, collection});
};
export const renameCollection = (oldName, newName) => async dispatch => {
  await dispatch({type: RENAME_COLLECTION, oldName, newName})
}