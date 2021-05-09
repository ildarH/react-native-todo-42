import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { TodoItem } from './TodoItem'
import {deleteTodo, updateTodo, toggleTodo} from './../redux/todoActions'

export const TodoItems = () => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todo.todos)
  console.log('todoitems: ', todos);
  const deleteHandler = key => {
    console.log('deleteTodo: ', key);
    dispatch(deleteTodo(key))
  }
  const updateHandler = (key, text) => {
    console.log('updateTodo: ', key, ' ', text);
    dispatch(updateTodo(key, text))
  }
  const toggleHandler = () => {
    console.log('toggleTodo');
  }

  return (
    <View style={styles.list}>
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <TodoItem item={item} onDelete={deleteHandler} onSave={updateHandler} onToggle={toggleHandler}/>
        )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
})