import { Action, ActionsUnion, createAction } from 'store/helpers/redux';
import {
  AuthActionTypes,
  LoginRequestType,
  LoginResponseSuccessType,
  LoginResponseErrorType,
} from 'store/types/auth';

export const AuthActions = {
  loginRequest: (payload: LoginRequestType): Action<
    AuthActionTypes.LOGIN_REQUEST, LoginRequestType
  > => createAction(AuthActionTypes.LOGIN_REQUEST, payload),
  loginSuccess: (payload: LoginResponseSuccessType): Action<
    AuthActionTypes.LOGIN_SUCCESS, LoginResponseSuccessType
  > => createAction(AuthActionTypes.LOGIN_SUCCESS, payload),
  loginError: (payload: LoginResponseErrorType): Action<
    AuthActionTypes.LOGIN_SUCCESS, LoginResponseErrorType
  > => createAction(AuthActionTypes.LOGIN_SUCCESS, payload),
};

export type AuthActionsUnion = ActionsUnion<typeof AuthActions>;
