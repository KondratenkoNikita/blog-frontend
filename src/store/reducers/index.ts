import { combineReducers } from 'redux';
import auth from './auth';
import utils from './utils';
import { UtilsState } from './utils/declarations';
import { AuthState } from './auth/declarations';

export type AppState = {
  auth: AuthState;
  utils: UtilsState;
}

export default combineReducers({
  auth,
  utils,
});
