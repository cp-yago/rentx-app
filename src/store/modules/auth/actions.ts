import { ActionTypes, ISignUpFormData } from './types';

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
