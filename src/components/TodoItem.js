import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {EditModal} from './EditModal';
import {THEME} from '../theme';
import {AppButton} from './ui/AppButton';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircle, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';

export const TodoItem = ({item, onDelete, onSave, onToggle}) => {
  const [modal, setModal] = useState(false);

  const priority = item.priority ? item.priority : '';

  const saveHandler = text => {
    onSave(item.key, text);
    setModal(false);
  };

  const deleteHandler = key => {
    Alert.alert(
      'Удаление',
      `Вы уверены, что хотите удалить "${item.text}"?`,
      [
        {text: 'Отмена', style: 'cancel'},
        {text: 'Удалить', style: 'destructive', onPress: onDelete(key)},
      ],
      {cancelable: true},
    );
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onLongPress={() => deleteHandler}>
      <EditModal
        visible={modal}
        onCancel={() => setModal(false)}
        text={item.text}
        priority={item.priority}
        collection={item.collection}
        onSave={saveHandler}
      />

      {priority ? (
        <View style={styles.iconContainer}>
          <FontAwesomeIcon
            style={styles.icon}
            icon={faCircle}
            size={10}
            color={THEME.HIGH_PRIORITY_COLOR}
          />
        </View>
      ) : (
        <View style={styles.iconContainer} />
      )}
      <View style={styles.listContainer}>
        <CheckBox
          style={styles.checkbox}
          checked={item.done}
          onValueChange={onToggle}
        />

        <Text style={styles.item}>{item.text}</Text>
        <View style={styles.buttons}>
          <AppButton
            onPress={() => setModal(true)}
            color={THEME.BUTTON_BACKGROUND_COLOR}>
            <FontAwesomeIcon
              icon={faEdit}
              color={THEME.ICON_COLOR}
              size={THEME.ICON_SIZE}
            />
          </AppButton>
          <AppButton
            onPress={deleteHandler}
            color={THEME.BUTTON_BACKGROUND_COLOR}>
            <FontAwesomeIcon
              icon={faTrash}
              color={THEME.ICON_COLOR}
              size={THEME.ICON_SIZE}
            />
          </AppButton>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  iconContainer: {
    alignItems: 'center',
    width: '5%',
  },
  icon: {
    alignSelf: 'center',
  },
  listContainer: {
    flexDirection: 'row',
    width: '90%',
    padding: 10,
    alignSelf: 'flex-start',
    borderLeftColor: THEME.BORDER_LEFT_COLOR,
    borderTopColor: THEME.BORDER_TOP_COLOR,
    borderBottomColor: THEME.BORDER_BOTTOM_COLOR,
    borderRightColor: THEME.BORDER_RIGHT_COLOR,
    borderTopWidth: 2,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: THEME.ITEM_BACKGROUND_COLOR,
  },
  checkbox: {
    width: '5%',
  },
  item: {
    width: '50%',
    alignSelf: 'center',
    color: THEME.TEXT_COLOR,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '25%',
    justifyContent: 'space-between',
  },
});
