import * as types from './coursesActionTypes';

const initialState = {
  loading: false,
  data: '',
  error: false,
  singleCourse: null,
  errResponse: '',
};

export function CoursesReducer(state = initialState, action) {
  switch (action.type) {
    case types.COURSES_START:
      return {
        ...state,
        loading: true,
        error: false,
        errResponse: '',
      };

    case types.COURSES_SUCCESS:
      return {
        ...state,
        error: false,
        errResponse: '',
        loading: false,
        data: action.payload,
      };
    case types.GET_COURSE:
      return {
        ...state,
        error: false,
        errResponse: '',
        loading: false,
        singleCourse: action.payload,
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
