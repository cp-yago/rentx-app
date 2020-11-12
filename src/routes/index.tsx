/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../services/NavigationService';
import { createStackNavigator } from '@react-navigation/stack';

import { useSelector } from 'react-redux';
import { IState } from '../store';
import { IAuth } from '../store/modules/auth/types';

import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import SignUpSuccess from '../screens/SignUpSuccess';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  const signed = useSelector<IState>((state) => state.auth.auth.signed);
  const loading = useSelector<IState>((state) => state.auth.auth.loading);

  console.log('useSelector: ', loading);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="SignIn" component={SignIn} />
        <Screen name="SignUp" component={SignUp} />
        <Screen name="SignUpSuccess" component={SignUpSuccess} />
        {signed && <Screen name="Home" component={Home} />}
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
