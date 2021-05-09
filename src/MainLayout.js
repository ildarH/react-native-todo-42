import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
} from 'react-native';
import {Header} from './components/Header';
import {MainScreen} from './components/screens/MainScreen';
import { THEME } from './theme';

export const MainLayout = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header title={'Список дел'} />
        <MainScreen />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.BACKGROUND_COLOR,
  },
});
