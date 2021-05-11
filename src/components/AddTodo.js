import React, {useState, createRef} from 'react';
import {
  Alert,
  Keyboard,
  TextInput,
  View,
  Button,
  Switch,
  Text,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faCaretSquareDown} from '@fortawesome/free-solid-svg-icons';
import ModalDropdown from 'react-native-modal-dropdown';
import {AppText} from './ui';
import {AppTextBold} from './ui';
import {AppButton} from './ui';

import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from './../redux/todoActions';
import {styles} from './AddTodoStyle';
import {BUTTON, COLOR, ICON, TEXT} from './../theme';

const actionSheetRef = createRef();

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [priority, setPriority] = useState(0);
  const [collection, setCollection] = useState('main');
  const togglePriority = () => setPriority(previousState => !previousState);
  const collectionOptions = useSelector(state => state.todo.collections);
  console.log({collectionOptions});

  const saveHandler = () => {
    if (text.trim().length > 3) {
      setText('');
      setPriority(0);
      actionSheetRef.current?.setModalVisible(false);
      Keyboard.dismiss();
      const todo = {
        date: new Date().toJSON(),
        text: text.trim(),
        done: false,
        collection: collection,
        priority: !!priority,
      };
      dispatch(addTodo(todo));
    } else {
      Alert.alert('Название должно быть больше 3-х символов');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Новое дело..."
            placeholderTextColor={TEXT.PLACEHOLDER_COLOR}
            onChangeText={setText}
            value={text}
            maxLength={128}
          />
          <AppButton
            onPress={() => {
              actionSheetRef.current?.setModalVisible();
            }}
            color={BUTTON.BACKGROUND_COLOR}>
            <FontAwesomeIcon
              icon={faCaretSquareDown}
              style={styles.icon}
              size={ICON.SIZE}
              color={TEXT.COLOR}
            />
          </AppButton>
          <AppButton onPress={saveHandler} color={BUTTON.BACKGROUND_COLOR}>
            <FontAwesomeIcon
              icon={faPlus}
              style={styles.icon}
              size={ICON.SIZE}
              color={TEXT.COLOR}
            />
          </AppButton>
        </View>
      </View>
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={styles.sheetContainer}
        onClose={() => setPriority(0)}>
        <View style={styles.sheet}>
          <AppTextBold style={styles.sheetTitle}>Новое дело</AppTextBold>
          <View style={styles.sheetPriority}>
            <View style={styles.sheetPriorityLabel}>
              {priority ? (
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
                thumbColor={priority ? COLOR.HIGH_PRIORITY : COLOR.LOW_PRIORITY}
                ios_backgroundColor="#3e3e3e"
                onValueChange={togglePriority}
                value={priority}
              />
            </View>
          </View>
          <View style={styles.dropDownWrapper}>
              <ModalDropdown
                defaultValue="main"
                style={styles.dropDown}
                options={collectionOptions}
                onSelect={value => setCollection(collectionOptions[value])}
              />
            </View>
          <View style={styles.sheetInputContainer}>
            <TextInput
              style={styles.sheetInput}
              placeholder="Новое дело..."
              placeholderTextColor={TEXT.PLACEHOLDER_COLOR}
              onChangeText={setText}
              value={text}
              maxLength={128}
            />
          </View>
          <View style={styles.sheetButtonsContainer}>
            <Button
              onPress={saveHandler}
              title="Добавить"
              style={styles.sheetButton}
              color={BUTTON.BACKGROUND_COLOR}
            />
          </View>
        </View>
      </ActionSheet>
    </View>
  );
};
