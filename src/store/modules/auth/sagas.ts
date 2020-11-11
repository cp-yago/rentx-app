import { call, all, takeLatest } from 'redux-saga/effects';
import { ToastAndroid } from 'react-native';
import api from '../../../services/api';
import { signUpRequest } from './actions';
import { ActionTypes } from './types';
import NavigationService from '../../../services/NavigationService';

type SignUpRequest = ReturnType<typeof signUpRequest>;

function* signUp({ payload }: SignUpRequest) {
  try {
    const { email, name, password } = payload;

    yield call(api.post, 'users', {
      email,
      name,
      password,
    });

    NavigationService.navigate('SignIn');
  } catch (err) {
    console.error(err);

    ToastAndroid.show(
      'Failed to sign up, please check your data.',
      ToastAndroid.SHORT,
    );
  }
}

export default all([takeLatest(ActionTypes.SIGN_UP_REQUEST, signUp)]);
