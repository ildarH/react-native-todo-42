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
  ADD_COLLECTION,
  DELETE_COLLECTION,
} from './types';

const initialState = {
  todos: [],
  completedTodos: [],
  collections: ['main'],
  loading: true,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          {
            key: action.key,
            ...action.todo,
          },
          ...state.todos,
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.key !== action.key),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.key === action.key) {
            todo = {...action.payload};
            todo.key = action.key;
          }
          return todo;
        }),
      };
    case FETCH_TODOS:
      return {...state, todos: action.todos, loading: false};
    case SHOW_LOADER:
      return {...state, loading: true};
    case HIDE_LOADER:
      return {...state, loading: false};
    case SHOW_ERROR:
      console.log('reducer error action: ', action);
      return {...state, error: action.error};
    case HIDE_ERROR:
      return {...state, error: null};
    case TOGGLE_DONE: {
      let toggledState = state.todos.map(todo => {
        if (action.payload === todo.key) {
          todo.done = !todo.done;
        }
        return todo;
      });
      const newState = {
        ...state,
        todos: toggledState,
        completedTodos: toggledState.filter(todo => todo.done),
      };
      return newState;
    }
    case CHANGE_PRIORITY:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.key === action.key) {
            todo.priority = action.priority;
          }
          return todo;
        }),
      };
    case ADD_COLLECTION:
      {
        console.log('ADD COLLECTION state before: ', state);
        const newState = {
          ...state,
          collections: [
            {
              key: action.key,
              ...action.collections,
            },
            ...state.collections,
          ],
        };
        console.log('ADD COLLECTION state after: ', newState);
        return newState;
      }
    default:
      return state;
  }
};
