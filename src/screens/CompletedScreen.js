import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Header} from './../components/Header';
import {TodoItem} from './../components/TodoItem';
import {styles} from './CompletedScreenStyle'

export const CompletedScreen = () => {

  const todos = useSelector(state => state.todo.todos)
  const option = 'completed'
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.wrapper}>
        <Header title={'Выполненные дела'} />
        <FlatList
        data={todos.filter(todo => todo.done)}
        renderItem={({item}) => (
          <TodoItem
            item={item} option={option}
          />
        )}
      />
      </View>
    </TouchableWithoutFeedback>
  );
};


