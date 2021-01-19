import { Action, ActionsUnion, createAction } from 'store/helpers/redux';
import { AuthActionTypes, LoginRequestType } from 'store/types/auth';

export const AuthActions = {
  login: (payload: LoginRequestType): Action<
    AuthActionTypes.LOGIN_REQUEST, LoginRequestType
  > => createAction(AuthActionTypes.LOGIN_REQUEST, payload),
};

export type AuthActionsUnion = ActionsUnion<typeof AuthActions>;
