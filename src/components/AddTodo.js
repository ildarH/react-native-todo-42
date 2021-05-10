import React, {useState, createRef} from 'react';
import {
  Alert,
  Keyboard,
  StyleSheet,
  TextInput,
  View,
  Button,
  Switch,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faCaretSquareDown} from '@fortawesome/free-solid-svg-icons';
import {AppText} from './ui/AppText';
import {AppButton} from './ui/AppButton';
import {THEME} from '../theme';

import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/todoActions';
import {AppTextBold} from './ui/AppTextBold';

const actionSheetRef = createRef();

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [priority, setPriority] = useState(0);
  const [collection, setCollection] = useState('main');
  const togglePriority = () => setPriority(previousState => !previousState)
  
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
    <View style={styles.wrapper}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Новое дело..."
          placeholderTextColor={THEME.TEXT_PLACEHOLDER_COLOR}
          onChangeText={setText}
          value={text}
          maxLength={128}
        />
        <AppButton
          onPress={() => {
            actionSheetRef.current?.setModalVisible();
          }}
          color={THEME.BUTTON_BACKGROUND_COLOR}>
          <FontAwesomeIcon
            icon={faCaretSquareDown}
            style={styles.icon}
            size={THEME.ICON_SIZE}
            color={THEME.TEXT_COLOR}
          />
        </AppButton>
        <AppButton onPress={saveHandler} color={THEME.BUTTON_BACKGROUND_COLOR}>
          <FontAwesomeIcon
            icon={faPlus}
            style={styles.icon}
            size={THEME.ICON_SIZE}
            color={THEME.TEXT_COLOR}
          />
        </AppButton>
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
                  false: THEME.LOW_PRIORITY_COLOR,
                  true: THEME.HIGH_PRIORITY_COLOR,
                }}
                thumbColor={
                  priority ? THEME.HIGH_PRIORITY_COLOR : THEME.LOW_PRIORITY_COLOR
                }
                ios_backgroundColor="#3e3e3e"
                onValueChange={togglePriority}
                value={priority}
              />
            </View>
          </View>
          <View style={styles.sheetInputContainer}>
            <TextInput
              style={styles.sheetInput}
              placeholder="Новое дело..."
              placeholderTextColor={THEME.TEXT_PLACEHOLDER_COLOR}
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
              color={THEME.BUTTON_BACKGROUND_COLOR}
            />
          </View>
        </View>
      </ActionSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: THEME.ITEM_BACKGROUND_COLOR,
    paddingVertical: 20,
    borderTopColor: THEME.BORDER_DARK_COLOR,
    borderBottomColor: THEME.BORDER_LIGHT_COLOR,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    width: '100%',
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: THEME.INPUT_BORDER_COLOR,
    color: THEME.TEXT_COLOR,
    width: '75%',
  },
  icon: {
    alignSelf: 'center',
  },
  sheetContainer: {
    backgroundColor: THEME.SHEET_BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
  },
  sheet: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
    // borderLeftColor: '#fff',
    // borderLeftWidth: 2,
    // borderRightColor: '#fff',
    // borderRightWidth: 2
  },
  sheetTitle: {
    color: THEME.TEXT_COLOR,
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
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
  sheetInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
  },
  sheetInput: {
    width: '90%',
    marginVertical: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    color: THEME.TEXT_COLOR,
    borderBottomWidth: 1,
    borderBottomColor: THEME.INPUT_BORDER_COLOR,
  },
  sheetButtonsContainer: {
    // width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    // borderLeftColor: '#fff',
    // borderLeftWidth: 2,
    // borderRightColor: '#fff',
    // borderRightWidth: 2,
  },
  sheetButton: {
    // alignSelf: 'center',
    fontSize: 20,
  },
});
