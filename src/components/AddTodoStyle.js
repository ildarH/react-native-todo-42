import {StyleSheet} from 'react-native';

import {BUTTON, COLOR, LIST, TEXT} from './../theme';

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: LIST.ITEM_BACKGROUND_COLOR,
    paddingVertical: 20,
    borderTopColor: BUTTON.BORDER_DARK_COLOR,
    borderBottomColor: BUTTON.BORDER_LIGHT_COLOR,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    width: '100%',
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.INPUT_BORDER,
    color: TEXT.COLOR,
    width: '75%',
  },
  icon: {
    alignSelf: 'center',
  },
  sheetContainer: {
    backgroundColor: COLOR.SHEET_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
  },
  sheet: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
  },
  sheetTitle: {
    color: TEXT.COLOR,
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
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
  sheetInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
  },
  sheetInput: {
    width: '90%',
    marginVertical: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    color: TEXT.COLOR,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.INPUT_BORDER,
  },
  sheetButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  sheetButton: {
    fontSize: 20,
  },
});
