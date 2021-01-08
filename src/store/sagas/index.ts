/* eslint-disable @typescript-eslint/no-unsafe-call */
import { all } from 'redux-saga/effects';
import auth from './auth';

export default function* unionSagas(): Generator {
  yield all([
    auth,
  ]);
}
