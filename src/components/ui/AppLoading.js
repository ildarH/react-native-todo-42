import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { THEME } from './../../theme/theme';

export const AppLoading = () => (
  <View style={styles.center}>
    <ActivityIndicator size='large' color={ THEME.LOADER_COLOR }/>
  </View>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
