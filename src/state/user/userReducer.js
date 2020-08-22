import * as types from './userActionTypes';

const initialState = {
  loading: false,
  data: '',
  error: false,
  errResponse: '',
  editUser: false,
  mentor: null,
  mentees: null,
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
        error: false,
        errResponse: '',
        data: action.payload,
      };
    case types.GET_MENTOR:
      return {
        ...state,
        loading: false,
        error: false,
        errResponse: '',
        mentor: action.payload,
      };

    case types.GET_MENTEES:
      return {
        ...state,
        loading: false,
        error: false,
        errResponse: '',
        mentees: action.payload,
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
