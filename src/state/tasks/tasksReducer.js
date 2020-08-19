import * as types from './tasksActionTypes';

const initialState = {
  loading: false,
  data: '',
  error: false,
  errResponse: '',
  singleTask: null,
  taskSubmit: '',
};

export function TaskReducer(state = initialState, action) {
  switch (action.type) {
    case types.TASKS_START:
      return {
        ...state,
        loading: true,
        error: false,
        errResponse: '',
      };

    case types.TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case types.SUBMIT_TASK:
      return {
        ...state,
        loading: false,
        error: false,
        errResponse: '',
        taskSubmit: 'success',
      };

    case types.GET_TASK:
      return {
        ...state,
        loading: false,
        error: false,
        errResponse: '',
        singleTask: action.payload,
      };

    case types.TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errResponse: action.payload,
      };
    case types.TASKS_RESET:
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
