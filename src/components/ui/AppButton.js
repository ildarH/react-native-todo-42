import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import { BUTTON } from './../../theme';
import {AppText} from './AppText';

export const AppButton = ({children, onPress, color = BUTTON.BACKGROUND_COLOR}) => {
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
    borderTopColor: BUTTON.BORDER_LIGHT_COLOR,
    borderRightColor: BUTTON.BORDER_DARK_COLOR,
    borderBottomColor: BUTTON.BORDER_DARK_COLOR,
    borderLeftColor: BUTTON.BORDER_LIGHT_COLOR,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
  },
});
