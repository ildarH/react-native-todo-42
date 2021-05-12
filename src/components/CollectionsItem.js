import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {styles} from './CollectionsItemStyle';

export const CollectionsItem = ({collection, deleteHandler}) => {
  const onDelete = id => {
    deleteHandler(id)
  };
  return (
    <TouchableOpacity onLongPress={() => onDelete(collection.index)}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{collection.item}</Text>
      </View>
    </TouchableOpacity>
  );
};
