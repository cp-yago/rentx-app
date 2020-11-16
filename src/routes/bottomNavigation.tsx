import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import CarList from '../screens/CarList';
import Schedules from '../screens/Schedules';

const BottomNavigation: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 15,
          height: 15,
        },
        inactiveBackgroundColor: '#FFFFFF',
        activeBackgroundColor: '#FFFFFF',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#DC1637',
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Icon
                name="home"
                size={size}
                color={focused ? '#DC1637' : color}
              />
            );
          },
        }}
      />
      <Screen
        name="CarList"
        component={CarList}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Icon
                name="list"
                size={size}
                color={focused ? '#DC1637' : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Schedules"
        component={Schedules}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Icon
                name="calendar"
                size={size}
                color={focused ? '#DC1637' : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Icon
                name="user"
                size={size}
                color={focused ? '#DC1637' : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
};

export default BottomNavigation;
