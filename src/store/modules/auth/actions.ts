import {
  ActionTypes,
  ISignUpFormData,
  ISignInFormData,
  ISignInSuccessResponse,
} from './types';

export function signUpRequest({ name, email, password }: ISignUpFormData) {
  return {
    type: ActionTypes.SIGN_UP_REQUEST,
    payload: {
      name,
      email,
      password,
    },
  };
}

export function signInRequest({ email, password }: ISignInFormData) {
  return {
    type: ActionTypes.SIGN_IN_REQUEST,
    payload: { email, password },
  };
}

export function signInSuccess({ token, user }: ISignInSuccessResponse) {
  return {
    type: ActionTypes.SIGN_IN_SUCCESS,
    payload: { token, user },
  };
}
