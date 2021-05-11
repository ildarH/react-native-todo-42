import React from 'react';
import { View, StyleSheet } from 'react-native';
import { THEME } from './../theme/theme';
import { AppTextBold } from './ui/AppTextBold';

export const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <AppTextBold style={styles.title}>{ title }</AppTextBold>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 25,
    backgroundColor: THEME.BACKGROUND_COLOR
  },
  title: {
    textAlign: 'center',
    color: THEME.TEXT_COLOR,
    fontSize: 20,
    fontWeight: 'bold'
  }
})