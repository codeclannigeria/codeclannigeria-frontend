import * as types from './userActionTypes';

const initialState = {
  loading: false,
  data: '',
  error: false,
  errResponse: '',
};

export function UserReducer(state = initialState, action) {
  switch (action.type) {
    case types.USER_START:
      return {
        ...state,
        loading: true,
      };

    case types.USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case types.USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errResponse: action.payload,
      };
    case types.USER_RESET:
      return {
        ...state,
        loading: false,
        error: false,
        errResponse: '',
      };

    default:
      return state;
  }
}
