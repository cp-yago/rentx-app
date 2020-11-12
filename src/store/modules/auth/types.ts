export enum ActionTypes {
  SIGN_UP_REQUEST = '@auth/SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS = '@auth/SIGN_UP_SUCCESS',
  SIGN_UP_FAIL = '@auth/SIGN_UP_FAIL',
  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS',
  SIGN_IN_FAIL = '@auth/SIGN_IN_FAIL',
  LOGOUT = '@auth/LOGOUT',
}

export interface ISignUpFormData {
  name: string;
  email: string;
  password: string;
}

export interface ISignInFormData {
  email: string;
  password: string;
}

export interface IUser {
  id?: string | null;
  name: string | null;
  email: string | null;
  admin: boolean | null;
}

export interface ISignInSuccessResponse {
  user: IUser;
  token: string;
}

export interface IAuth {
  token: string | null;
  loading: boolean;
  signed: boolean;
}

export interface IAuthState {
  user: IUser | null;
  auth: IAuth;
}
