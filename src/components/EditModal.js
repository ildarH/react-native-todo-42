import React, {useState} from 'react';
import {View, TextInput, Modal, Alert, Button, Switch} from 'react-native';
import {useSelector} from 'react-redux';
import ModalDropdown from 'react-native-modal-dropdown';
import {BUTTON, COLOR, TEXT} from './../theme';
import {AppText} from './ui';
import {AppTextBold} from './ui';
import {styles} from './EditModalStyle';

export const EditModal = ({
  visible,
  onCancel,
  text,
  priority,
  collection,
  onSave,
}) => {
  const [title, setTitle] = useState(text);
  const [order, setOrder] = useState(priority);
  const [category, setCategory] = useState(collection);
  const toggleOrder = () => setOrder(previousState => !previousState);
  const collectionOptions = useSelector(state => state.todo.collections);
  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert('Ошибка', 'Минимальная длина 3 символа.');
    } else {
      const updatedTodo = {
        text: title,
        priority: order,
        collection: category,
      };
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
              trackColor={{
                false: COLOR.LOW_PRIORITY,
                true: COLOR.HIGH_PRIORITY,
              }}
              thumbColor={order ? COLOR.HIGH_PRIORITY : COLOR.LOW_PRIORITY}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleOrder}
              value={order}
            />
          </View>

        </View>
        <View style={styles.dropDownWrapper}>
            <ModalDropdown
              defaultValue="main"
              style={styles.dropDown}
              options={collectionOptions}
              onSelect={value => setCategory(collectionOptions[value])}
            />
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
