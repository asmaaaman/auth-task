import * as actionTypes from "../actionsTypes/actionTypes";

const userLogin = (user) => ({
  type: actionTypes.LOGIN,
  payload: {
    user: user,
  },
});
export default userLogin;
