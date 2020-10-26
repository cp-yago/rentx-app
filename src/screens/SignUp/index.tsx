/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useRef } from 'react';
import { Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik } from 'formik';
import Swiper from 'react-native-swiper';

import CustomInput from '../../components/CustomInput';
import Button from '../../components/Button';

import styles from './styles';

const SignUp: React.FC = () => {
  const swiper = useRef<Swiper>(null);

  const handleNext = useCallback(() => {
    if (swiper.current) {
      swiper.current.scrollBy(1);
    }
  }, []);

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
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={() => {}}>
          <Swiper
            ref={swiper}
            dotStyle={styles.swiperDot}
            activeDotStyle={styles.swiperActiveDot}
            paginationStyle={styles.swipperPagination}
            style={styles.swiperWrapper}>
            <View style={styles.formContainer}>
              <Text style={styles.signUpStepLabel}>1.Dados</Text>
              <>
                <CustomInput icon="user" placeholder="Nome" />
                <CustomInput icon="mail" placeholder="E-mail" last />
                <Button onPress={handleNext}>Próximo</Button>
              </>
            </View>

            <View style={styles.formContainer}>
              <Text style={styles.signUpStepLabel}>2.Senha</Text>
              <>
                <CustomInput icon="lock" placeholder="Senha" />
                <CustomInput icon="lock" placeholder="Repetir senha" last />
                <Button onPress={() => console.log('aham')}>Próximo</Button>
              </>
            </View>
          </Swiper>
        </Formik>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
