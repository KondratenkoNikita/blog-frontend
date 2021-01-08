import { combineReducers } from 'redux';
import auth from './auth';
import { AuthState } from './auth/declarations';

export type AppState = {
  auth: AuthState;
}

export default combineReducers({
  auth,
});
