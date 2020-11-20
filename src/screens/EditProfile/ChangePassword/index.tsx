import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import CustomInput from '../../../components/CustomInput';
import Button from '../../../components/Button';

import styles from './styles';

const ChangePassword = () => {
  const schema = Yup.object().shape({
    currentPass: Yup.string().required(),
    password: Yup.string().required(),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref('password')],
      'Os campos devem ser iguais',
    ),
  });

  const handleSaveChanges = (values: any) => {
    console.log(values);
  };

  return (
    <View style={styles.tabView}>
      <Formik
        initialValues={{
          currentPass: '',
          password: '',
          passwordConfirmation: '',
        }}
        validationSchema={schema}
        onSubmit={handleSaveChanges}>
        {({ values, handleChange, handleSubmit, isValid }) => {
          return (
            <>
              <View style={styles.changePasswordInputContainer}>
                <CustomInput
                  placeholder="Senha atual"
                  icon="lock"
                  value={values.currentPass}
                  onChangeText={handleChange('currentPass')}
                  password
                />
                <CustomInput
                  placeholder="Senha"
                  icon="lock"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  password
                />
                <CustomInput
                  placeholder="Repetir senha"
                  icon="lock"
                  value={values.passwordConfirmation}
                  onChangeText={handleChange('passwordConfirmation')}
                  password
                />
              </View>

              <Button onPress={handleSubmit} enabled={isValid}>
                Salvar alterações
              </Button>
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default ChangePassword;
