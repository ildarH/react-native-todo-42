import React, {useState, useMemo} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  faSortDown as ascending,
  faSortUp as descending,
  faSort
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {deleteTodo, updateTodo, toggleTodo} from './../redux/todoActions';
import {AppButton} from './ui/AppButton';
import {TodoItem} from './TodoItem';
import {THEME} from './../theme';

export const useSortData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);
  
  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    
    return sortableItems;
  }, [items, sortConfig]);
  
  const requestSort = key => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({key, direction});
  };
  return {sortedTodos: sortedItems, requestSort, sortConfig};
};

export const TodoItems = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);
  const {sortedTodos, requestSort, sortConfig} = useSortData(todos);
  const getIconNamesFor = name => {
    if (!sortConfig) {
      return;
    }
    if (sortConfig.key === name) {
      if (sortConfig.direction === 'descending') {
        return descending;
      } else {
        return ascending;
      }
    }
    return undefined;
    // return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  console.log('todoItems sorted: ', sortedTodos);
  console.log('todoItems sortConfig: ', sortConfig);

  const deleteHandler = key => {
    dispatch(deleteTodo(key));
  };
  const updateHandler = (key, text) => {
    dispatch(updateTodo(key, text));
  };
  const toggleHandler = () => {
    console.log('toggleTodo');
  };

  return (
    <View style={styles.list}>
      <View style={styles.sortButtons}>
        <Text>Алфавит:</Text>
        <AppButton onPress={() => requestSort('text')}>
          <FontAwesomeIcon
            icon={getIconNamesFor('text') || faSort}
            size={THEME.ICON_SIZE}
            color={THEME.TEXT_COLOR}
          />
        </AppButton>
        <Text>Приоритет:</Text>
        <AppButton onPress={() => requestSort('priority')}>
            <FontAwesomeIcon
              icon={getIconNamesFor('priority') || faSort}
              size={THEME.ICON_SIZE}
              color={THEME.TEXT_COLOR}
            />
        </AppButton>
      </View>
      <FlatList
        data={sortedTodos}
        renderItem={({item}) => (
          <TodoItem
            item={item}
            onDelete={deleteHandler}
            onSave={updateHandler}
            onToggle={toggleHandler}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    paddingHorizontal: 40,
  },
  sortButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
