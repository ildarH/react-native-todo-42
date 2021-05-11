import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Modal, Alert, Button, Switch} from 'react-native';
import {THEME} from './../theme/theme';
import {AppText} from './ui/AppText';
import {AppTextBold} from './ui/AppTextBold';

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
              trackColor={{false: THEME.LOW_PRIORITY_COLOR, true: THEME.HIGH_PRIORITY_COLOR}}
              thumbColor={order ? THEME.HIGH_PRIORITY_COLOR : THEME.LOW_PRIORITY_COLOR}
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
          placeholderTextColor={THEME.TEXT_PLACEHOLDER_COLOR}
          maxLength={128}
        />
        <View style={styles.buttons}>
          <Button
            title="Отмена"
            style={styles.button}
            color={THEME.BUTTON_BACKGROUND_COLOR}
            onPress={cancelHanlder}
          />
          <Button
            title="Сохранить"
            style={styles.button}
            color={THEME.BUTTON_BACKGROUND_COLOR}
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
    backgroundColor: THEME.BACKGROUND_COLOR,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 30,
    color: THEME.TEXT_COLOR,
  },
  input: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: THEME.INPUT_BORDER_COLOR,
    color: THEME.TEXT_COLOR,
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
