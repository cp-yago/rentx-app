import React, { useCallback } from 'react';
import { ImageBackground, View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import background from '../../assets/images/background.png';
import done from '../../assets/images/done.png';

import styles from './styles';

const SignUpSuccess: React.FC = () => {
  const { navigate } = useNavigation();

  const handleOk = useCallback(() => {
    navigate('SignIn');
  }, [navigate]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="contain"
        style={styles.background}
      />
      <View style={styles.footer}>
        <Image source={done} />
        <Text style={styles.title}>Conta criada!</Text>
        <Text style={styles.subTitle}>
          Agora é só fazer login e aproveitar.
        </Text>
        <TouchableOpacity style={styles.okButton} onPress={handleOk}>
          <Text style={styles.okButtonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpSuccess;
