import {StyleSheet} from 'react-native';
import {BUTTON, LIST, TEXT} from './../theme';

export const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    paddingHorizontal: 40,
  },
  sortButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: LIST.ITEM_BACKGROUND_COLOR,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 10,
    borderTopColor: BUTTON.BORDER_LIGHT_COLOR,
    borderRightColor: BUTTON.BORDER_DARK_COLOR,
    borderBottomColor: BUTTON.BORDER_DARK_COLOR,
    borderLeftColor: BUTTON.BORDER_LIGHT_COLOR,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
  },
  textShaded: {
    color: TEXT.SHADED,
  },
});
