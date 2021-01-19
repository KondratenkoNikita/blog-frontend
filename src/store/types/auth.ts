/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
export enum AuthActionTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
}

export interface AuthReducerTypes {
  isLoading: boolean;
}

export interface LoginRequestType {
  email: string;
  password: string;
}
