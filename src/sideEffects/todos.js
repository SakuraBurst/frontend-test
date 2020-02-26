import { call, put, select, takeEvery } from "redux-saga/effects";
import { get } from "lodash";
import request from "../utils/request";
import {
  TODO_FETCH,
  todoFetchSuccessAction,
  todoFetchFailAction
} from "../actions/todos";

export function* todosSideEffect(action) {
  try {
    const userId = yield select(state => get(state, "auth.data.id", ""));
    const data = yield call(
      request,
      `http://localhost:3004/todos?userId=${userId}`
    );
    yield put(todoFetchSuccessAction(data));
  } catch (e) {
    yield put(todoFetchFailAction(e));
  }
}

export default [takeEvery(TODO_FETCH, todosSideEffect)];
