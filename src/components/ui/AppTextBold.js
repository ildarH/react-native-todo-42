import React from 'react';
import {Text} from 'react-native';
import {styles} from './AppTextBoldStyle'

export const AppTextBold = props => (
  <Text style={{...styles.default, ...props.style}}>{props.children}</Text>
);

