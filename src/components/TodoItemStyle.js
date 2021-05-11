import {StyleSheet} from 'react-native';
import {BUTTON, LIST, TEXT} from './../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    width: '5%',
  },
  icon: {
    alignSelf: 'center',
  },
  listContainer: {
    flexDirection: 'row',
    width: '90%',
    padding: 10,
    alignSelf: 'flex-start',
    borderTopColor: BUTTON.BORDER_DARK_COLOR,
    borderRightColor: BUTTON.BORDER_LIGHT_COLOR,
    borderBottomColor: BUTTON.BORDER_LIGHT_COLOR,
    borderLeftColor: BUTTON.BORDER_DARK_COLOR,
    borderTopWidth: 2,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: LIST.ITEM_BACKGROUND_COLOR,
  },
  listContainerDone: {
    backgroundColor: LIST.ITEM_DONE_BACKGROUND_COLOR,
  },
  checkbox: {
    width: '5%',
  },
  item: {
    width: '50%',
    alignSelf: 'center',
    color: TEXT.COLOR,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '25%',
    justifyContent: 'space-between',
  },
});
