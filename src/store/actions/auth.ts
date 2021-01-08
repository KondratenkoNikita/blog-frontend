import { Action, ActionsUnion, createAction } from 'store/helpers/redux';
import { AuthActionTypes } from 'store/types/auth';

export const AuthActions = {
  login: (): Action<AuthActionTypes.LOGIN_REQUEST> => createAction(AuthActionTypes.LOGIN_REQUEST),
};

export type AuthActionsUnion = ActionsUnion<typeof AuthActions>;
