import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import { BUTTON } from './../../theme';
import {AppText} from './AppText';
import {styles} from './AppButtonStyle';

export const AppButton = ({children, onPress, color = BUTTON.BACKGROUND_COLOR}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={{...styles.button, backgroundColor: color}}>
        <AppText>{children}</AppText>
      </View>
    </TouchableOpacity>
  );
};

