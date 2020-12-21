import * as actionTypes from "../actionsTypes/actionTypes";

function loginReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOGIN: {
      return {
        ...state,
        user: action.payload.user,
      };
    }
    case actionTypes.RESPONSE_USER_INFO: {
      return {
        ...state,
        user_Info: action.payload.user_Info,
      };
    }
    default:
      return state;
  }
}
export default loginReducer;
