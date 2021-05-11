import { StyleSheet } from 'react-native';
import { COLOR, TEXT } from './../theme';

export const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 25,
    backgroundColor: COLOR.BACKGROUND
  },
  title: {
    textAlign: 'center',
    color: TEXT.COLOR,
    fontSize: 20,
    fontWeight: 'bold'
  }
})
