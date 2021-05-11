import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Modal, Alert, Button, Switch} from 'react-native';
import { BUTTON, COLOR, TEXT } from './../theme';
import {AppText} from './ui';
import {AppTextBold} from './ui';

export const EditModal = ({visible, onCancel, text, priority, collection, onSave}) => {
  const [title, setTitle] = useState(text);
  const [order, setOrder] = useState(priority);
  const [category, setCategory] = useState(collection);
  const toggleOrder = () => setOrder(previousState => !previousState);
  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert('Ошибка', 'Минимальная длина 3 символа.');
    } else {
      const updatedTodo = {
        text: title,
        priority: order,
        collection: category
      }
      onSave(updatedTodo);
    }
  };
  const cancelHanlder = () => {
    setTitle(text);
    onCancel();
  };
  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.container}>
        <AppTextBold style={styles.header}>Изменить название</AppTextBold>
        <View style={styles.sheetPriority}>
          <View style={styles.sheetPriorityLabel}>
            {order ? (
              <AppText>Высокий приоритет</AppText>
            ) : (
              <AppText>Обычный приоритет</AppText>
            )}
          </View>
          <View style={styles.sheetPrioritySwitch}>
            <Switch
              trackColor={{false: COLOR.LOW_PRIORITY, true: COLOR.HIGH_PRIORITY}}
              thumbColor={order ? COLOR.HIGH_PRIORITY : COLOR.LOW_PRIORITY}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleOrder}
              value={order}
            />
          </View>
        </View>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder="Введите название"
          placeholderTextColor={TEXT.PLACEHOLDER_COLOR}
          maxLength={128}
        />
        <View style={styles.buttons}>
          <Button
            title="Отмена"
            style={styles.button}
            color={BUTTON.BACKGROUND_COLOR}
            onPress={cancelHanlder}
          />
          <Button
            title="Сохранить"
            style={styles.button}
            color={BUTTON.BACKGROUND_COLOR}
            onPress={saveHandler}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.BACKGROUND,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 30,
    color: TEXT.COLOR,
  },
  input: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: COLOR.INPUT_BORDER,
    color: TEXT.COLOR,
    width: '80%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    width: '80%',
  },
  button: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonsText: {
    fontSize: 15,
    marginLeft: 10,
  },
  sheetPriority: {
    marginVertical: 10,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    // borderLeftColor: '#fff',
    // borderLeftWidth: 2,
    // borderRightColor: '#fff',
    // borderRightWidth: 2,
  },
  sheetPriorityLabel: {
    width: '50%',
  },
  sheetPrioritySwitch: {
    width: 50,
  },
});
