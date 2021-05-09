import {createStore, combineReducers, applyMiddleware} from 'redux';
import { todoReducer } from './todoReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  todo: todoReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))
