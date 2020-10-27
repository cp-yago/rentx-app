/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import { useNavigation } from '@react-navigation/native';

import Checkbox from '@react-native-community/checkbox';
import CustomInput from '../../components/CustomInput';
import Button from '../../components/Button';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import api from '../../services/api';

const SignIn: React.FC = () => {
  // const { navigate } = useNavigation();
  const [toggleCheckBox, setToggleCheckbox] = useState(false);

  const schema = Yup.object().shape({
    email: Yup.string().email().required('Campo e-mail é obrigatório'),
    password: Yup.string().required('Campo senha é obrigatório'),
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.container}>
        <View style={styles.pageIntro}>
          <View style={styles.titlesContainer}>
            <Text style={styles.title}>Estamos quase lá.</Text>
            <Text style={styles.subTitle}>
              Faça seu login para começar uma experiência incrível
            </Text>
          </View>
        </View>

        <Formik
          initialValues={{
            email: '',
            password: '',
            remember: false,
          }}
          validationSchema={schema}
          onSubmit={() => {}}>
          {({ values, handleChange, handleSubmit, isValid }) => {
            return (
              <View style={styles.formContainer}>
                <>
                  <CustomInput
                    icon="user"
                    placeholder="E-mail"
                    value={values.email}
                    onChangeText={handleChange('email')}
                  />
                  <CustomInput
                    icon="lock"
                    placeholder="Senha"
                    last
                    password
                    value={values.password}
                    onChangeText={handleChange('password')}
                  />
                  <View style={styles.checkboxContainer}>
                    <Checkbox
                      value={toggleCheckBox}
                      onValueChange={(newValue) => setToggleCheckbox(newValue)}
                      tintColors={{ true: '#DC1637', false: 'black' }}
                    />
                    <Text style={styles.checkboxText}>Lembrar-me</Text>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={styles.forgotPasswordLink}>
                      <Text style={styles.checkboxText}>
                        Esqueci minha senha
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <Button onPress={handleSubmit} enabled={isValid}>
                    Login
                  </Button>
                </>
              </View>
            );
          }}
        </Formik>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn;