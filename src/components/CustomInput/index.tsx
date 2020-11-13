import React, { useCallback, useState } from 'react';
import {
  TextInput,
  View,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

interface InputProps extends TextInputProps {
  icon: string;
  placeholder: string;
  password?: boolean;
  last?: boolean;
}

const CustomInput: React.ForwardRefRenderFunction<TextInput, InputProps> = ({
  icon,
  placeholder,
  password,
  last,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  return (
    <View style={[styles.inputContainer, last ? styles.lastInput : {}]}>
      <View style={styles.inputIconContainer}>
        <Icon name={icon} size={20} color="#7A7A80" />
      </View>
      <TextInput
        placeholder={placeholder}
        keyboardAppearance="dark"
        secureTextEntry={showPassword}
        style={styles.input}
        {...rest}
      />
      {password && (
        <TouchableOpacity
          onPress={handleShowPassword}
          style={styles.togglePassword}>
          {showPassword ? (
            <Icon name="eye-off" size={20} color="#7A7A80" />
          ) : (
            <Icon name="eye-off" size={20} color="#7A7A80" />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;
