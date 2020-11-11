import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const { Navigator, Screen } = createStackNavigator();

import Home from '../screens/Home';

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
