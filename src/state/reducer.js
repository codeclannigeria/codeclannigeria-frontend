import * as types from "./actionType";

const initialSIgnupState = {
  loading: false,
  token: "",
  error: false
};

export function AuthReducer(state = initialSIgnupState, action) {
  switch (action.type) {
    case (types.SIGNUP_START):
      return {
        ...state,
        loading: true
      };

    case (types.SIGNUP_SUCCESS):
      return {
        ...state,
        loading: false,
        token: action.payload
      };

    case (types.SIGNUP_FAILURE):
      return {
        ...state,
        loading: false,
        error: true
      };

    default:
      return state;
  }

}
