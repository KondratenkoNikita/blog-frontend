import { AuthState } from './declarations';

export const INITIAL_STATE: AuthState = {
  isLoading: false,
  isAuthenticated: false,
  data: {
    email: '',
    userName: '',
  },
};
