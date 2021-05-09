import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Modal, Alert} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faWindowClose,
  faCheckSquare
} from '@fortawesome/free-solid-svg-icons';
import {THEME} from '../theme';
import { AppButton } from './ui/AppButton';
import { AppText } from './ui/AppText';

export const EditModal = ({visible, onCancel, text, onSave}) => {
  const [title, setTitle] = useState(text);
  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert('Ошибка', 'Минимальная длина 3 символа.');
    } else {
      onSave(title);
    }
  };
  const cancelHanlder = () => {
    setTitle(text);
    onCancel();
  };
  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.container}>
        <Text style={styles.header}>Изменить название</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder="Введите название"
          maxLength={128}
        />
        <View style={styles.buttons}>
        <AppButton
        style={styles.button}
          onPress={cancelHanlder}>
          <FontAwesomeIcon icon={faWindowClose} size={ THEME.ICON_SIZE }/>
          <AppText style={styles.buttonsText}>Отмена</AppText>
        </AppButton>
        <AppButton
        style={styles.button}
          onPress={saveHandler}>
          <AppText style={styles.buttonsText}>Сохранить</AppText>
          <FontAwesomeIcon icon={faCheckSquare} size={ THEME.ICON_SIZE }/>
        </AppButton>
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
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 30,
  },
  input: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: THEME.BORDER_COLOR,
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
    marginLeft: 10
  }
});
