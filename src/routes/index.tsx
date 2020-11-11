import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../services/NavigationService';

import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthRoutes />
    </NavigationContainer>
  );
};

export default Routes;
