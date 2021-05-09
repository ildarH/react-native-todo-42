import React, {useState, createRef} from 'react';
import {Alert, Keyboard, StyleSheet, TextInput, View} from 'react-native';
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
  const [priority, setPriority] = useState('0');
  const [collection, setCollection] = useState('main');
  let actionSheet;

  const saveHandler = () => {
    if (text.trim().length > 3) {
      setText('');
      Keyboard.dismiss();
      const todo = {
        date: new Date().toJSON(),
        text,
        done: false,
        collection: collection,
        priority: priority,
      };
      dispatch(addTodo(todo));
    } else {
      Alert.alert('Название не может быть больше 3-х символов');
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
      <ActionSheet ref={actionSheetRef} containerStyle={styles.sheetContainer}>
        <View style={styles.sheet}>
          <AppTextBold style={styles.sheetTitle}>Новое дело</AppTextBold>
          <View><AppText>Выбрать приоритет</AppText></View>
          <View style={styles.sheetInputContainer}>
            <TextInput
              style={styles.sheetInput}
              placeholder="Новое дело..."
              placeholderTextColor={THEME.TEXT_PLACEHOLDER_COLOR}
              onChangeText={setText}
              value={text}
              maxLength={128}
            />
            <AppButton
              onPress={saveHandler}
              color={THEME.BUTTON_BACKGROUND_COLOR}>
              <FontAwesomeIcon
                icon={faPlus}
                style={styles.icon}
                size={THEME.ICON_SIZE}
                color={THEME.TEXT_COLOR}
              />
            </AppButton>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: THEME.BORDER_COLOR,
    color: THEME.TEXT_COLOR,
    width: '80%',
  },
  icon: {
    alignSelf: 'center',
  },
  sheetContainer: {
    flexDirection:'column',
    backgroundColor: THEME.SHEET_BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent:'space-between'
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
    marginVertical: 10
  },
  sheetInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center'
  },
  sheetInput: {
    width: '70%',
    color: THEME.TEXT_COLOR,
    borderBottomWidth: 1,
    borderBottomColor: THEME.BORDER_COLOR,
  }
});
