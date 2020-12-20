import { takeEvery, all } from "redux-saga/effects";

function* watchAll() {
  yield all([takeEvery(), takeEvery()]);
}

export default watchAll;
