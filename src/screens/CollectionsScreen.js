import React, {useState, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  TextInput,
  Alert,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {useSelector, useDispatch} from 'react-redux';
import { addCollection, fetchCollection, deleteCollection } from './../redux/collectionsActions';
import {Header} from './../components/Header';
import {AppButton} from './../components/ui';
import {BUTTON, ICON, TEXT} from './../theme';
import {styles} from './CollectionsScreenStyle';
import {CollectionsItem} from '../components/CollectionsItem';

export const CollectionsScreen = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchCollection());
    }, [dispatch]),
  );

  const collections = useSelector(state => state.todo.collections);

  const saveHandler = () => {
    if (text.trim().length > 3) {
      const newCollection = [...collections, text.trim()];
      Keyboard.dismiss();
      setText('');
      dispatch(addCollection(newCollection));
    } else {
      Alert.alert('Название должно быть больше 3-х символов');
    }
  };

  const deleteHandler = key => {
    if (collections[key] !== 'main') {
      Alert.alert(
        'Удаление',
        `Вы уверены, что хотите удалить "${collections[key]}"?`,
        [
          {text: 'Отмена', style: 'cancel'},
          {text: 'Удалить', style: 'destructive', onPress: () => {
            dispatch(deleteCollection(collections[key]))}
          },
        ],
        {cancelable: true},
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.wrapper}>
        <Header title={'Категории'} />

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Новая категория..."
            placeholderTextColor={TEXT.PLACEHOLDER_COLOR}
            onChangeText={setText}
            value={text}
            maxLength={60}
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
        <View style={styles.list}>
          <FlatList
            data={collections}
            keyExtractor={index => index.toString()}
            renderItem={collection => (
              <CollectionsItem
                collection={collection}
                deleteHandler={deleteHandler}
              />
              // <View style={styles.item}>
              //   <Text style={styles.itemText}> {item} </Text>
              // </View>
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
