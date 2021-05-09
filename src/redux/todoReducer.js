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

const initialState = {
  todos: [],
  loading: true,
  error: null,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            key: action.key,
            ...action.todo
          },
        ],
      };
    case DELETE_TODO:
      return { ...state, todos: state.todos.filter((todo) => todo.key !== action.key) };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.key === action.key) {
            todo.text = action.text;
          }
          return todo;
        }),
      };
    case FETCH_TODOS:
      return { ...state, todos: action.todos, loading: false };
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SHOW_ERROR:
      console.log('reducer error action: ', action);
      return { ...state, error: action.error };
    case HIDE_ERROR:
      return { ...state, error: null };
    case TOGGLE_DONE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.key === action.payload) {
            todo.done = !todo.done;
          }
          return todo;
        }),
      };
    case CHANGE_PRIORITY:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.key === action.key) {
            todo.priority = action.priority;
          }
          return todo
        }),
      }
    default:
      return state;
  }
};
