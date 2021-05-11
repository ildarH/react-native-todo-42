import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainScreen} from './../components/screens/MainScreen';
import {CompletedScreen} from './../components/screens/CompletedScreen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheckSquare, faHome} from '@fortawesome/free-solid-svg-icons';
import {THEME} from '../theme/theme';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: THEME.TAB_BACKGROUND_COLOR,
        inactiveBackgroundColor: THEME.TAB_BACKGROUND_COLOR,
        activeTintColor: THEME.TEXT_COLOR,
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="All"
        component={MainScreen}
        options={{
          tabBarLabel: 'All',
          tabBarIcon: () => (
            <FontAwesomeIcon
              icon={faHome}
              color={THEME.ICON_COLOR}
              size={THEME.ICON_SIZE}
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
              color={THEME.ICON_COLOR}
              size={THEME.ICON_SIZE}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
