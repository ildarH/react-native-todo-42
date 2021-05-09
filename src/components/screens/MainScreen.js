import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppLoading} from './../ui/AppLoading';
import {AddTodo} from './../AddTodo';
import {TodoItems} from './../TodoItems';
import {
  fetchAllTodos,
  hideError,
  hideLoader,
  showError,
  showLoader,
} from './../../redux/todoActions';

export const MainScreen = () => {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchAllTodos())
  // }, [dispatch])

  // const todos = useSelector(state => state.todo.todos)
  // console.log('main screen todos: ', todos);

  // const dispatch = useDispatch();
  // const todos = useSelector(state => state.todos);
  // const sortArrayAsc = arr =>
  //   arr.sort((a, b) => b.priority - a.priority || a.text.localeCompare(b.text));
  // const dataSortedByPriority = sortArrayAsc(todos);
  // console.table('what to sort: ', todos);
  // console.table('sorted: ', dataSortedByPriority);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  const error = useSelector(state => state.todo.error);
  const loading = useSelector(state => state.todo.loading);
  console.log('MainLayout');
  console.log('error: ', error);
  console.log('loading: ', loading);

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorContent}>{error}</Text>
        <Button title="Reload" onPress={fetchAllTodos()} />
      </View>
    );
  }

  return (
    <View style={styles.content}>
      <AddTodo />
      <View style={styles.buttons}>
        <Text>Sorting buttons</Text>
      </View>
      {loading ? <AppLoading /> : <TodoItems />}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 40,
  },
  errorContainer: {
    flex: 1,
  },
});
