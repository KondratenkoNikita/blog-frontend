/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-unused-vars */
import {
  put,
  call,
  select,
  takeLatest,
} from 'redux-saga/effects';
import { AuthActionTypes } from 'store/types/auth';
import { AuthActionsUnion } from 'store/actions/auth';
import { PickAction } from 'store/helpers/redux';
import { AppState } from 'store/reducers';

function* loginSaga(action: PickAction<
  AuthActionsUnion, AuthActionTypes.LOGIN_REQUEST
>): Generator {
  try {
    // const { payload: { username, password } } = action;
    // const responce = yield call(, {
    //   method: 'post',
    //   url: ,
    //   data: { userName: username, password },
    // })
    yield console.log('responce');
  } catch (e) {
    console.log(e, 'e');
  }
}

function* watch(): Generator {
  yield takeLatest(AuthActionTypes.LOGIN_REQUEST, loginSaga);
}

export default watch;
