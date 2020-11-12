import React from 'react';
import { View, Text } from 'react-native';

// import styles from './styles';

import store from '../../store';

const Home: React.FC = () => {
  const { user } = store.getState().auth;

  return (
    <View style={{ flex: 1 }}>
      <Text>{`teste: ${user.name}`}</Text>
    </View>
  );
};

export default Home;
