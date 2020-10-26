import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';

import styles from './styles';

const Button: React.FC<RectButtonProperties> = ({ children, ...rest }) => {
  return (
    <RectButton style={styles.nextButton} {...rest}>
      <Text style={styles.nextButtonText}>{children}</Text>
    </RectButton>
  );
};

export default Button;
