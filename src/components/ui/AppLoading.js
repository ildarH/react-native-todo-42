import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { COLOR } from './../../theme';
import {styles} from './AppLoadingStyle'

export const AppLoading = () => (
  <View style={styles.center}>
    <ActivityIndicator size='large' color={ COLOR.LOADER }/>
  </View>
);

