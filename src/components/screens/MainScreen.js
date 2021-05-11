import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppLoading} from './../ui/AppLoading';
import {Header} from './../Header';
import {AddTodo} from './../AddTodo';
import {TodoItems} from './../TodoItems';
import {fetchAllTodos} from './../../redux/todoActions';
import {THEME} from '../../theme/theme';

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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.wrapper}>
        <Header title={'Список дел'} />
        <AddTodo />
        {loading ? <AppLoading /> : <TodoItems />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  buttons: {
    paddingHorizontal: 40,
  },
  errorContainer: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    backgroundColor: THEME.BACKGROUND_COLOR,
  },
});
