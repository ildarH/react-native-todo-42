import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import { THEME } from '../../theme';
import {AppText} from './AppText';

export const AppButton = ({children, onPress, color = THEME.BUTTON_BACKGROUND_COLOR}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={{...styles.button, backgroundColor: color}}>
        <AppText>{children}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
