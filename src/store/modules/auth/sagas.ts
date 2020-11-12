import { call, all, takeLatest, put } from 'redux-saga/effects';
import { ToastAndroid } from 'react-native';
import api from '../../../services/api';
import { signUpRequest, signInRequest, signInSuccess } from './actions';
import { ActionTypes } from './types';
import NavigationService from '../../../services/NavigationService';
import AsyncStorage from '@react-native-async-storage/async-storage';

type SignUpRequest = ReturnType<typeof signUpRequest>;
type SignInRequest = ReturnType<typeof signInRequest>;

function* signUp({ payload }: SignUpRequest) {
  try {
    const { email, name, password } = payload;

    yield call(api.post, 'users', {
      email,
      name,
      password,
    });

    NavigationService.navigate('SignUpSuccess');
  } catch (err) {
    console.error(err);

    ToastAndroid.show(
      'Failed to sign up, please check your data.',
      ToastAndroid.SHORT,
    );
  }
}

function* signIn({ payload }: SignInRequest) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess({ token, user }));

    yield AsyncStorage.multiSet([
      ['@Rentx:token', token],
      ['@Rentx:user', JSON.stringify(user)],
    ]);

    NavigationService.navigate('Home');
  } catch (err) {
    console.error('ERROR: ', err);
    ToastAndroid.show(
      'Failed to authenticate, please check your credentials',
      ToastAndroid.SHORT,
    );
  }
}

export default all([
  takeLatest(ActionTypes.SIGN_UP_REQUEST, signUp),
  takeLatest(ActionTypes.SIGN_IN_REQUEST, signIn),
]);
