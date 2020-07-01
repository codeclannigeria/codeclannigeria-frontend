import * as types from './coursesActionTypes';

const initialSIgnupState = {
  loading: false,
  data: '',
  error: false,
  errResponse: '',
};

export function CoursesReducer(state = initialSIgnupState, action) {
  switch (action.type) {
    case types.COURSES_START:
      return {
        ...state,
        loading: true,
      };

    case types.COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload,
      };

    case types.COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errResponse: action.payload,
      };
    case types.COURSES_RESET:
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
