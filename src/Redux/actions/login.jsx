import * as actionTypes from "../actionsTypes/actionTypes";

export const userLogin = (user) => ({
  type: actionTypes.LOGIN,
  payload: {
    user: user,
  },
});
export const RESPONSE_USER_INFO = (user) => ({
  type: actionTypes.RESPONSE_USER_INFO,
  payload: {
    userInfo: user,
  },
});
