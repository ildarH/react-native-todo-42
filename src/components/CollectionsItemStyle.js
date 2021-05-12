import {StyleSheet} from 'react-native'
import { LIST, TEXT } from './../theme'

export const styles = StyleSheet.create({
  item: {
    marginBottom: 20,
    backgroundColor: LIST.ITEM_BACKGROUND_COLOR,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10
  },
  itemText: {
    color: TEXT.COLOR,
    paddingLeft: 10
  }
})