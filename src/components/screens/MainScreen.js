import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppLoading} from './../ui/AppLoading';
import {AddTodo} from './../AddTodo';
import {TodoItems} from './../TodoItems';
import {fetchAllTodos} from './../../redux/todoActions';

export const MainScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  const error = useSelector(state => state.todo.error);
  const loading = useSelector(state => state.todo.loading);

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorContent}>{error}</Text>
        <Button title="Reload" onPress={fetchAllTodos()} />
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <AddTodo />
      {loading ? <AppLoading /> : <TodoItems />}
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    paddingHorizontal: 40,
  },
  errorContainer: {
    flex: 1,
  },
});
