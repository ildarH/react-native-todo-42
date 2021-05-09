// import React from 'react';
// import {Alert} from 'react-native';
// import {TodoContext} from './todoContext';
// import { addTodo, fetchAllTodos, deleteTodo, updateTodo } from './todoActions'
// import {todoReducer} from './todoReducer';
// import {Http} from '../../http';

// export function TodoState({ children }) {
  // const initialState = {
  //   todos: [],
  //   loading: false,
  //   error: null,
  // };
  // const [state, dispatch] = useReducer(todoReducer, initialState);

  // const addTodo = async (text) => {
  //   hideError();
  //   try {
  //     const data = await Http.post(
  //       'https://react-native-todo-app-42-default-rtdb.europe-west1.firebasedatabase.app/todos.json',
  //       { text, done: false, collection: 'main', priority: '0' }
  //     );
  //     dispatch({ type: ADD_TODO, text, key: data.name });
  //   } catch (error) {
  //     showError('Ошибка при добавлении дела');
  //   }
  // };
  // const deleteTodo = (key) => {
  //   const todo = state.todos.find((t) => t.key === key);
  //   Alert.alert(
  //     'Удаление',
  //     `Вы уверены, что хотите удалить "${todo.text}"?`,
  //     [
  //       {
  //         text: 'Отмена',
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'Удалить',
  //         style: 'destructive',
  //         onPress: async () => {
  //           await Http.delete(
  //             `https://react-native-todo-app-42-default-rtdb.europe-west1.firebasedatabase.app/todos/${key}.json`
  //           );
  //           dispatch({ type: DELETE_TODO, key });
  //         },
  //       },
  //     ],
  //     { cancelable: true }
  //   );
  // };
  // const fetchAllTodos = async () => {
  //   showLoader();
  //   hideError();
  //   try {
  //     const data = await Http.get(
  //       'todos.json'
  //     );
  //     const todos = Object.keys(data).map((k) => ({ ...data[k], key: k }));
  //     dispatch({ type: FETCH_TODOS, todos });
  //   } catch (error) {
  //     showError('Ошибка получения данных');
  //   } finally {
  //     hideLoader();
  //   }
  // };
  // const updateTodo = async (key, text) => {
  //   hideError();
  //   try {
  //     await Http.patch(
  //       `https://react-native-todo-app-42-default-rtdb.europe-west1.firebasedatabase.app/todos/${key}.json`,
  //       { text }
  //     );
  //     dispatch({ type: UPDATE_TODO, key, text });
  //   } catch (error) {
  //     showError('Ошибка обновления данных');
  //   }
  // };
  // const showLoader = () => dispatch({ type: SHOW_LOADER });
  // const hideLoader = () => dispatch({ type: HIDE_LOADER });
  // const showError = (error) => dispatch({ type: SHOW_ERROR, error });
  // const hideError = () => dispatch({ type: HIDE_ERROR });

//   return (
//     <TodoContext.Provider
//       value={{
//         todos: state.todos,
//         loading: state.loading,
//         error: state.error,
//         addTodo,
//         deleteTodo,
//         updateTodo,
//         fetchAllTodos,
//       }}>
//       {children}
//     </TodoContext.Provider>
//   );
// }
