import { AuthActionsUnion } from 'store/actions/auth';
import { AuthActionTypes } from 'store/types/auth';

import { INITIAL_STATE } from './initialState';
import { AuthState } from './declarations';

const authReducer = (
  state = INITIAL_STATE,
  action: AuthActionsUnion,
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case AuthActionTypes.LOGIN_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
