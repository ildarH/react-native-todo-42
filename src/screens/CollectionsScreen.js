import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Text,
  TextInput
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {useSelector} from 'react-redux';
import {Header} from './../components/Header';
import { AppButton } from './../components/ui';
import { BUTTON, COLOR, ICON, TEXT } from './../theme';

export const CollectionsScreen = () => {
  const [text, setText] = useState()
  const collections = useSelector(state => state.todo.collections);
  const saveHandler = () => {
    console.log('save handler add collection');
  }


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.wrapper}>
        <Header title={'Категории'} />

        <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Новая категория..."
          placeholderTextColor={TEXT.COLOR}
          onChangeText={setText}
          value={text}
          maxLength={128}
        />
        <AppButton onPress={saveHandler} color={BUTTON.BACKGROUND_COLOR}>
          <FontAwesomeIcon
            icon={faPlus}
            style={styles.icon}
            size={ICON.SIZE}
            color={TEXT.COLOR}
          />
        </AppButton>
      </View>

        <FlatList
          data={collections}
          keyExtractor={(index) => index.toString()}
          renderItem={({item}) => (
            <Text> {item} </Text>
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  buttons: {
    paddingHorizontal: 40,
  },
  errorContainer: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND,
  },
});
