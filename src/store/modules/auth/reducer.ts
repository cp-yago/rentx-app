import { Reducer } from 'redux';
import produce from 'immer';

import { ActionTypes, IAuthState } from './types';

const INITIAL_STATE: IAuthState = {
  user: {
    name: '',
    email: '',
    token: '',
  },
};

const auth: Reducer<IAuthState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.SIGNUP_REQUEST: {
        console.log('payload: ', action.payload);

        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default auth;
