import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { IAuthState, IUser } from '../../../store/modules/auth/types';

import CustomInput from '../../../components/CustomInput';
import Button from '../../../components/Button';

import styles from './styles';

const ChangePersonalData: React.FC = () => {
  const user = useSelector<IAuthState, IUser>((state) => state.auth.user);

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
  });

  const handleSaveChanges = (values: any) => {
    console.log(values);
  };

  return (
    <View style={styles.tabView}>
      <Formik
        initialValues={{
          name: '',
          email: '',
        }}
        validationSchema={schema}
        onSubmit={handleSaveChanges}>
        {({ values, handleChange, handleSubmit, isValid }) => {
          return (
            <>
              <View style={styles.changeDataInputsContainer}>
                <CustomInput
                  placeholder={`${user.name}`}
                  icon="user"
                  value={values.name}
                  onChangeText={handleChange('name')}
                />
                <CustomInput
                  placeholder={`${user.email}`}
                  icon="mail"
                  value={values.email}
                  onChangeText={handleChange('email')}
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

export default ChangePersonalData;
