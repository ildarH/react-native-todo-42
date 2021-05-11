import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainScreen} from './../screens';
import {CompletedScreen} from './../screens';
import {CollectionsScreen} from './../screens';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCheckSquare,
  faListUl,
  faFolder,
} from '@fortawesome/free-solid-svg-icons';
import { COLOR, ICON, TEXT } from './../theme';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: COLOR.TAB_BACKGROUND,
        inactiveBackgroundColor: COLOR.TAB_BACKGROUND,
        activeTintColor: TEXT.COLOR,
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="All"
        component={MainScreen}
        options={{
          tabBarLabel: 'All',
          tabBarIcon: () => (
            <FontAwesomeIcon
              icon={faListUl}
              color={ICON.COLOR}
              size={ICON.SIZE}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={CollectionsScreen}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: () => (
            <FontAwesomeIcon
              icon={faFolder}
              color={ICON.COLOR}
              size={ICON.SIZE}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Completed"
        component={CompletedScreen}
        options={{
          tabBarLabel: 'Completed',
          tabBarIcon: () => (
            <FontAwesomeIcon
              icon={faCheckSquare}
              color={ICON.COLOR}
              size={ICON.SIZE}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
