/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useRef } from 'react';
import { Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik } from 'formik';
import Swiper from 'react-native-swiper';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { signUpRequest } from '../../store/modules/auth/actions';

import CustomInput from '../../components/CustomInput';
import Button from '../../components/Button';

import styles from './styles';

const SignUp: React.FC = () => {
  const dispatch = useDispatch();

  const swiper = useRef<Swiper>(null);

  const handleNext = useCallback(() => {
    if (swiper.current) {
      swiper.current.scrollBy(1);
    }
  }, []);

  const schema = Yup.object().shape({
    name: Yup.string().required('Campo nome é obrigatório'),
    email: Yup.string().email().required('Campo e-mail é obrigatório'),
    password: Yup.string().required('Campo senha é obrigatório'),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref('password')],
      'Os campos devem ser iguais',
    ),
  });

  const handleSignUp = useCallback(
    async (values) => {
      console.log(values);

      await schema.validate(values, { abortEarly: false });

      const { name, email, password } = values;

      dispatch(signUpRequest({ name, email, password }));
    },
    [dispatch, schema],
  );

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
            <Text style={styles.title}>Crie sua conta</Text>
            <Text style={styles.subTitle}>
              Faça seu cadastro de forma rápida e fácil
            </Text>
          </View>
        </View>

        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={schema}
          onSubmit={handleSignUp}>
          {({ values, handleChange, handleSubmit, isValid }) => {
            return (
              <Swiper
                ref={swiper}
                dotStyle={styles.swiperDot}
                activeDotStyle={styles.swiperActiveDot}
                style={styles.swiperWrapper}>
                <View style={styles.formContainer}>
                  <Text style={styles.signUpStepLabel}>1.Dados</Text>
                  <>
                    <CustomInput
                      icon="user"
                      placeholder="Nome"
                      value={values.name}
                      onChangeText={handleChange('name')}
                    />
                    <CustomInput
                      icon="mail"
                      placeholder="E-mail"
                      value={values.email}
                      onChangeText={handleChange('email')}
                      last
                    />
                    <Button onPress={handleNext}>Próximo</Button>
                  </>
                </View>

                <View style={styles.formContainer}>
                  <Text style={styles.signUpStepLabel}>2.Senha</Text>
                  <>
                    <CustomInput
                      icon="lock"
                      placeholder="Senha"
                      value={values.password}
                      onChangeText={handleChange('password')}
                      password
                    />
                    <CustomInput
                      icon="lock"
                      placeholder="Repetir senha"
                      last
                      password
                      value={values.confirmPassword}
                      onChangeText={handleChange('confirmPassword')}
                    />
                    <Button onPress={handleSubmit} enabled={isValid}>
                      Cadastrar
                    </Button>
                  </>
                </View>
              </Swiper>
            );
          }}
        </Formik>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
