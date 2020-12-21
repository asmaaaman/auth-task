import { takeEvery, all } from "redux-saga/effects";
import handleLogin from "./login";
import * as actionTypes from "../actionsTypes/actionTypes";

function* watchAll() {
  yield all([takeEvery(actionTypes.LOGIN, handleLogin)]);
}

export default watchAll;
