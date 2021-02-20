/* eslint-disable no-shadow */
export enum AuthActionTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
}

export type AuthReducerTypes = {
  isLoading: boolean;
}

export type LoginRequestType = {
  email: string;
  password: string;
}

export type LoginResponseType = {
  email: string;
  userName: string;
  emailError: boolean;
  passwordError: boolean;
}

export type LoginResponseSuccessType = Omit<LoginResponseType, 'emailError' | 'passwordError'>;

export type LoginResponseErrorType = Omit<LoginResponseType, 'email' | 'userName'>;
