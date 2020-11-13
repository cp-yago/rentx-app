import { Reducer } from 'redux';
import produce from 'immer';

import { ActionTypes, IAuthState } from './types';

const INITIAL_STATE: IAuthState = {
  user: {
    name: null,
    email: null,
    admin: false,
  },
  auth: {
    token: null,
    loading: false,
    signed: false,
  },
};

const auth: Reducer<IAuthState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.SIGN_UP_REQUEST: {
        draft.auth.loading = true;
        break;
      }
      case ActionTypes.SIGN_IN_REQUEST: {
        draft.auth.loading = true;
        break;
      }
      case ActionTypes.SIGN_IN_SUCCESS: {
        draft.auth.token = action.payload.token;
        draft.auth.signed = true;
        draft.auth.loading = false;
        draft.user = action.payload.user;
        console.log(action.type, action.payload);
        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default auth;
