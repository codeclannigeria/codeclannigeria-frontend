import * as types from './authActionTypes';

const initialSIgnupState = {
  loading: false,
  token: '',
  error: false,
  errResponse: '',
};

export function AuthReducer(state = initialSIgnupState, action) {
  switch (action.type) {
    case types.AUTH_START:
      return {
        ...state,
        loading: true,
      };

    case types.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload,
      };

    case types.AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errResponse: action.payload,
      };
    case types.AUTH_RESET:
      return {
        ...state,
        loading: false,
        error: false,
        errResponse: '',
      };
    case types.AUTH_LOGOUT:
      return {
        ...state,
        loading: false,
        error: false,
        errResponse: '',
        token: '',
      };

    default:
      return state;
  }
}
