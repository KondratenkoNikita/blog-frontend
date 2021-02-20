import {
  takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  AuthActionTypes,
  LoginResponseSuccessType,
  LoginResponseType,
} from 'store/types/auth';
import { UtilsActions } from 'store/actions/utils';
import { AuthActions, AuthActionsUnion } from 'store/actions/auth';
import { PickAction } from 'store/helpers/redux';

function* loginSaga(action: PickAction<
  AuthActionsUnion, AuthActionTypes.LOGIN_REQUEST
>): Generator {
  try {
    const { payload: { email, password } } = action;
    yield axios.request({
      method: 'post',
      url: 'http://localhost:3000/auth/login',
      data: { email, password },
    }).then((res: unknown) => {
      const { emailError, passwordError } = res as LoginResponseType;
      if (emailError || passwordError) {
        AuthActions.loginError({
          emailError,
          passwordError,
        });
      } else AuthActions.loginSuccess(res as LoginResponseSuccessType);
    });
  } catch (e) {
    yield UtilsActions.popupNotification({ text: 'Something went wrong, try again' });
    console.log(e, 'e');
  }
}

function* auth(): Generator {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  yield takeLatest(AuthActionTypes.LOGIN_REQUEST, loginSaga);
}

export default auth;
