import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { COLOR } from './../../theme';

export const AppLoading = () => (
  <View style={styles.center}>
    <ActivityIndicator size='large' color={ COLOR.LOADER }/>
  </View>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
