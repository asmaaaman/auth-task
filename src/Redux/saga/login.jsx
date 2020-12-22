import { call, put } from "redux-saga/effects";
import { postLogin } from "../../Auth/axios/login";
import { RESPONSE_USER_INFO } from "../actions/login";

function* handleLogin({ payload }) {
  try {
    const response = yield call(postLogin, payload.user);
    console.log(response);
    yield put(RESPONSE_USER_INFO(response));
  } catch (error) {
    console.log("err", error);
  }
}

export default { handleLogin };
