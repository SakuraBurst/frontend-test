import { call, put, select, takeEvery } from "redux-saga/effects";
import { get } from "lodash";
import request from "../utils/request";
import {
  ALBUM_FETCH,
  albumFetchSuccessAction,
  albumFetchFailAction
} from "../actions/albums";

export function* albumsSideEffect(action) {
  try {
    const userId = yield select(state => get(state, "auth.data.id", ""));
    const data = yield call(
      request,
      `http://localhost:3004/albums?userId=${userId}`
    );
    yield put(albumFetchSuccessAction(data));
  } catch (e) {
    yield put(albumFetchFailAction(e));
  }
}

export default [takeEvery(ALBUM_FETCH, albumsSideEffect)];
