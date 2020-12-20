import { call, put } from "redux-saga/effects";
import { postLogin } from "../../Auth/axios/login";

function* handleLogin(action) {
  try {
    const response = yield call(postLogin, action.payload.user);
    console.log("response data in saga", response.data.data);
  } catch (error) {}
}

export { handleLogin };
