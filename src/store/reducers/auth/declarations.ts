export type AuthState = {
  isLoading: boolean;
  isAuthenticated: boolean;
  data: {
    email: string;
    userName: string;
  }
}
