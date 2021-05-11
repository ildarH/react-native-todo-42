import React, {useState, useMemo} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  faSortDown as ascending,
  faSortUp as descending,
  faSort,
  faFilter as filterIcon,
  faSquare as emptyCheckIcon,
  faCheckSquare as fullCheckIcon,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {deleteTodo, updateTodo, toggleTodo} from './../redux/todoActions';
import {AppButton} from './ui';
import {AppText} from './ui';
import {TodoItem} from './TodoItem';
import {ICON, TEXT} from './../theme';
import {styles} from './TodoItemsStyle';

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

const filterTodo = (todos, filter) => {
  console.log('function, todos & filter', todos, filter);
  let filteredList = [];
  if (filter === 'all') {
    filteredList = todos;
  } else if (filter === 'done') {
    filteredList = todos.filter(todo => todo.done);
  } else if (filter === 'undone') {
    filteredList = todos.filter(todo => !todo.done);
  }
  return filteredList;
};

export const TodoItems = () => {
  const [disableFilter, setDisableFilter] = useState(false);
  const [doneFilter, setDoneFilter] = useState(false);
  const [undoneFilter, setUndoneFilter] = useState(true);
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);

  const filteringOption = disableFilter
    ? 'all'
    : doneFilter
    ? 'done'
    : 'undone';

  console.log('filteringOption: ', filteringOption);

  const getIconNamesForFilter = filter => {
    switch (filter) {
      case 'all':
        // setDisableFilter(() => true)
        // setDoneFilter(() =>false)
        // setUndoneFilter(() =>false)
        return filterIcon;
      case 'done':
        //   setDisableFilter(false)
        //   setDoneFilter(true)
        //   setUndoneFilter(false)
        return fullCheckIcon;
      case 'undone':
        //   setDisableFilter(false)
        //   setDoneFilter(false)
        //   setUndoneFilter(true)
        return emptyCheckIcon;
      default:
        return undefined;
    }
  };

  console.log('todos: ', todos); //!
  // const filteredTodos = filterTodo(todos, filteringOption);
  // console.log('filteredTodos: ', filteredTodos); //!

  const {sortedTodos, requestSort, sortConfig} = useSortData(todos);
  const getIconNamesForSort = name => {
    if (!sortConfig) {
      return;
    }
    if (sortConfig.key === name) {
      return sortConfig.direction === 'descending' ? descending : ascending;
    }

    return undefined;
  };

  const deleteHandler = key => {
    dispatch(deleteTodo(key));
  };
  const updateHandler = (key, updatedTodo) => {
    dispatch(updateTodo(key, updatedTodo));
  };
  const toggleHandler = (key, done) => {
    dispatch(toggleTodo(key, done));
  };

  return (
    <View style={styles.list}>
      <View style={styles.sortButtons}>
        <AppText style={styles.textShaded}>Алфавит:</AppText>
        <AppButton onPress={() => requestSort('text')}>
          <FontAwesomeIcon
            icon={getIconNamesForSort('text') || faSort}
            size={ICON.SIZE}
            color={TEXT.COLOR}
          />
        </AppButton>
        <AppText style={styles.textShaded}>Приоритет:</AppText>
        <AppButton onPress={() => requestSort('priority')}>
          <FontAwesomeIcon
            icon={getIconNamesForSort('priority') || faSort}
            size={ICON.SIZE}
            color={TEXT.COLOR}
          />
        </AppButton>
        <AppButton>
          <FontAwesomeIcon
            icon={getIconNamesForFilter(filteringOption) || filterIcon}
            size={ICON.SIZE}
            color={TEXT.COLOR}
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
