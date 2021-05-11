import {StyleSheet} from 'react-native';
import { COLOR, TEXT } from './../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.BACKGROUND,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 30,
    color: TEXT.COLOR,
  },
  input: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: COLOR.INPUT_BORDER,
    color: TEXT.COLOR,
    width: '80%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    width: '80%',
  },
  button: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonsText: {
    fontSize: 15,
    marginLeft: 10,
  },
  sheetPriority: {
    marginVertical: 10,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  sheetPriorityLabel: {
    width: '50%',
  },
  sheetPrioritySwitch: {
    width: 50,
  },
});
