import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { THEME } from '../../theme';

export const AppText = props => (
  <Text style={{...styles.default, ...props.style}}>{props.children}</Text>
);

const styles = StyleSheet.create({
  default: {
    fontSize: 12,
    color: THEME.TEXT_COLOR
  },
});
