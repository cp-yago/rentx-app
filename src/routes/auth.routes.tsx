import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import SignUpSuccess from '../screens/SignUpSuccess';

const AuthRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignUp" component={SignUp} />
      <Screen name="SignUpSuccess" component={SignUpSuccess} />

      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
};

export default AuthRoutes;
