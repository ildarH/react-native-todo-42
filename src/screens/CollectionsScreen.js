import React, {useState} from 'react';
import {
  View,
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
import { BUTTON, ICON, TEXT } from './../theme';
import { styles } from './CollectionsScreenStyle'

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

