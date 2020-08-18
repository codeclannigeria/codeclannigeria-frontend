import * as types from './userActionTypes';

const initialState = {
  loading: false,
  data: '',
  error: false,
  errResponse: '',
  editUser: false,
};

export function UserReducer(state = initialState, action) {
  switch (action.type) {
    case types.USER_START:
      return {
        ...state,
        loading: true,
        editUser: '',
      };
    case types.EDIT_USER:
      return {
        ...state,
        error: false,
        errResponse: '',
        editUser: 'success',
        loading: false,
        data: action.payload,
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
        editUser: true,
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
