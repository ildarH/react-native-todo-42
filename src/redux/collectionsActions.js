// import {Http} from './../api/http';
import {
  ADD_COLLECTION,
  FETCH_COLLECTION,
  RENAME_COLLECTION,
  DELETE_COLLECTION,
} from './types';

export const addCollection = collections => async dispatch => {
  console.log('addCollection: ', collections);
  // await Http.post('collections', collections)
  dispatch({type: ADD_COLLECTION, collections});
};
export const fetchCollection = () => async dispatch => {
  await dispatch({type: FETCH_COLLECTION})
}