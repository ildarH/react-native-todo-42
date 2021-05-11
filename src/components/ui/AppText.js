import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { TEXT } from './../../theme';

export const AppText = props => (
  <Text style={{...styles.default, ...props.style}}>{props.children}</Text>
);

const styles = StyleSheet.create({
  default: {
    fontSize: 12,
    color: TEXT.COLOR
  },
});
