import { AuthReducerTypes } from 'store/types/auth';

export const INITIAL_STATE: AuthReducerTypes = {
  isLoading: false,
  isAuthenticated: false,
  data: {
    email: '',
    userName: '',
  },
};
