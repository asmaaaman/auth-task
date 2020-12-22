import { call, put } from "redux-saga/effects";

import { postRegister } from "../../Auth/axios/register";

function* handleRegister({ payload }) {
  try {
    const response = yield call(postRegister, payload.user);
    console.log(response);
  } catch (error) {
    console.log("err", error);
  }
}

export default { handleRegister };
