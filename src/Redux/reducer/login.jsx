import * as actionTypes from "../actionsTypes/actionTypes";

function loginReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOGIN: {
      return {
        ...state,
        user: action.payload.user,
      };
    }
    // case actionTypes.RETURN_USER_DATA: {
    //   return {
    //     ...state,
    //     user_data: action.payload.user_data,

    //   };
    // }
    default:
      return state;
  }
}
export default loginReducer;
