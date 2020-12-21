import { call, put } from "redux-saga/effects";
import { postLogin } from "../../Auth/axios/login";
import { RESPONSE_USER_INFO } from "../actions/login";

function* handleLogin(action) {
  try {
    const response = yield call(postLogin, action.payload.user);
    console.log(response);
    console.log("response data in saga", response.data.data);
    yield put(RESPONSE_USER_INFO(response.data.data.user));
  } catch (error) {
    console.log("err", error);
  }
}

export default { handleLogin };
