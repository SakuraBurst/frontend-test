import { call, put, takeEvery } from "redux-saga/effects";
import { GETPHOTOS, setAlbumPhotos, albumPhotosError } from "../actions/albums";
import request from "../utils/request";

export function* getAlbumPhotos(actions) {
  try {
    const { albumId } = actions;
    const data = yield call(
      request,
      `http://localhost:3004/photos?albumId=${albumId}`
    );
    if (data.length) {
      yield put(setAlbumPhotos(data));
    } else {
      /* eslint-disable no-throw-literal */
      throw "Error.";
    }
  } catch (e) {
    yield put(albumPhotosError(e));
  }
}

export default [takeEvery(GETPHOTOS, getAlbumPhotos)];
