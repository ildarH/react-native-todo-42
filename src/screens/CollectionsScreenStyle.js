import {StyleSheet} from 'react-native';
import {BUTTON, COLOR, LIST, TEXT} from './../theme';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 20,
    width: '100%',
    backgroundColor: LIST.ITEM_BACKGROUND_COLOR,
    borderTopColor: BUTTON.BORDER_DARK_COLOR,
    borderBottomColor: BUTTON.BORDER_LIGHT_COLOR,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  input: {
    width: '60%',
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.INPUT_BORDER,
    color: TEXT.COLOR,
  },
  list: {
    flexDirection: 'row',

    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: COLOR.BACKGROUND,
    flex: 1,
  },
});
