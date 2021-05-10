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
import {AppText} from './ui/AppText';
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

  // console.log('todoItems sorted: ', sortedTodos);
  // console.log('todoItems sortConfig: ', sortConfig);

  const deleteHandler = key => {
    dispatch(deleteTodo(key));
  };
  const updateHandler = (key, updatedTodo) => {
    dispatch(updateTodo(key, updatedTodo));
  };
  const toggleHandler = (key, done) => {
    dispatch(toggleTodo(key, done))
  };

  return (
    <View style={styles.list}>
      <View style={styles.sortButtons}>
        <AppText style={styles.textShaded}>Алфавит:</AppText>
        <AppButton onPress={() => requestSort('text')}>
          <FontAwesomeIcon
            icon={getIconNamesFor('text') || faSort}
            size={THEME.ICON_SIZE}
            color={THEME.TEXT_COLOR}
          />
        </AppButton>
        <AppText style={styles.textShaded}>Приоритет:</AppText>
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
    backgroundColor: THEME.ITEM_BACKGROUND_COLOR,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,
    borderTopColor: THEME.BORDER_LIGHT_COLOR,
    borderRightColor: THEME.BORDER_DARK_COLOR,
    borderBottomColor: THEME.BORDER_DARK_COLOR,
    borderLeftColor: THEME.BORDER_LIGHT_COLOR,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
  },
  textShaded: {
    color: THEME.TEXT_SHADED
  }
});
