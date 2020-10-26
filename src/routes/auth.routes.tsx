import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import SignUp from '../screens/SignUp';
import SignUpSuccess from '../screens/SignUpSuccess';

const AuthRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignUp" component={SignUp} />
      <Screen name="SignUpSuccess" component={SignUpSuccess} />
    </Navigator>
  );
};

export default AuthRoutes;
