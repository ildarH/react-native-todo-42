import React from 'react';
import { View } from 'react-native';
import { AppTextBold } from './ui';
import { styles } from './HeaderStyle';

export const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <AppTextBold style={styles.title}>{ title }</AppTextBold>
    </View>
  );
}
