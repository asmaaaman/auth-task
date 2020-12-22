import * as actionTypes from "../actionsTypes/actionTypes";

function registerReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.REGISTER: {
      return {
        ...state,
        user: action.payload.user,
      };
    }

    default:
      return state;
  }
}
export default registerReducer;
