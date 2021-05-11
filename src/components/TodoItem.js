import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {EditModal} from './EditModal';
import {AppButton} from './ui';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircle, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import { BUTTON, COLOR, ICON, LIST, TEXT } from './../theme';

export const TodoItem = ({item, onDelete, onSave, onToggle}) => {
  const [modal, setModal] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(item.done);
  // console.log('TodoItem item: ', item);
  // console.log('TodoItem toggleCheckBox: ', toggleCheckBox);

  const priority = item.priority ? item.priority : '';

  const saveHandler = todo => {
    const {key, ...updatedItem} = item;
    const updatedTodo = {...updatedItem, ...todo};
    onSave(item.key, updatedTodo);
    setModal(false);
  };

  const checkboxHandler = key => {
    onToggle(key, !toggleCheckBox);
    setToggleCheckBox(!toggleCheckBox);
  };

  const deleteHandler = key => {
    Alert.alert(
      'Удаление',
      `Вы уверены, что хотите удалить "${item.text}"?`,
      [
        {text: 'Отмена', style: 'cancel'},
        {text: 'Удалить', style: 'destructive', onPress: () => onDelete(key)},
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={styles.container}>
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
            color={COLOR.HIGH_PRIORITY}
          />
        </View>
      ) : (
        <View style={styles.iconContainer} />
      )}
      <TouchableOpacity style={[styles.listContainer, toggleCheckBox ? styles.listContainerDone : null]}>
        <CheckBox
          style={styles.checkbox}
          disabled={false}
          value={toggleCheckBox}
          tintColors={{true: COLOR.HIGH_PRIORITY}}
          onValueChange={() => checkboxHandler(item.key)}
        />

        <Text style={styles.item}>{item.text}</Text>
        <View style={styles.buttons}>
          <AppButton
            onPress={() => setModal(true)}
            color={BUTTON.BACKGROUND_COLOR}>
            <FontAwesomeIcon
              icon={faEdit}
              color={ICON.COLOR}
              size={ICON.SIZE}
            />
          </AppButton>
          <AppButton
            onPress={() => deleteHandler(item.key)}
            color={BUTTON.BACKGROUND_COLOR}>
            <FontAwesomeIcon
              icon={faTrash}
              color={ICON.COLOR}
              size={ICON.SIZE}
            />
          </AppButton>
        </View>
      </TouchableOpacity>
    </View>
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
    borderTopColor: BUTTON.BORDER_DARK_COLOR,
    borderRightColor: BUTTON.BORDER_LIGHT_COLOR,
    borderBottomColor: BUTTON.BORDER_LIGHT_COLOR,
    borderLeftColor: BUTTON.BORDER_DARK_COLOR,
    borderTopWidth: 2,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: LIST.ITEM_BACKGROUND_COLOR,
  },
  listContainerDone: {
    backgroundColor: LIST.ITEM_DONE_BACKGROUND_COLOR
  },
  checkbox: {
    width: '5%',
  },
  item: {
    width: '50%',
    alignSelf: 'center',
    color: TEXT.COLOR,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '25%',
    justifyContent: 'space-between',
  },
});
