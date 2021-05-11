import {createStore, combineReducers, applyMiddleware} from 'redux';
import { reducer } from './reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  todo: reducer,
})

export const store = createStore(reducers, applyMiddleware(thunk))
