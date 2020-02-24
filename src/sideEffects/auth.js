import { call, put, takeEvery } from "redux-saga/effects";
import { push } from "connected-react-router";
import request from "../utils/request";
import fakeAuth from "../fakeAuth";
import {
  AUTH_LOGIN,
  authLoginSuccessAction,
  authLoginFailAction
} from "../actions/auth";

export function* authSideEffect(action) {
  try {
    const { email } = action;
    const data = yield call(
      request,
      `http://localhost:3004/users?email=${email}`
    );
    if (data.length) {
      fakeAuth.authenticate(data[0].id);
      yield put(authLoginSuccessAction(data[0]));
      yield put(push("/todo"));
    } else {
      /* eslint-disable no-throw-literal */
      throw "User not found.";
    }
  } catch (e) {
    yield put(authLoginFailAction(e));
  }
}

export default [takeEvery(AUTH_LOGIN, authSideEffect)];
