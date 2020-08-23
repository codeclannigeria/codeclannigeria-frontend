import * as types from './tasksActionTypes';

const initialState = {
  loading: false,
  data: '',
  error: false,
  errResponse: '',
  singleTask: null,
  taskSubmit: '',
  mentorTasks: null,
  menteeSubmittedTask: { loading: null, data: null },
};

export function TaskReducer(state = initialState, action) {
  switch (action.type) {
    case types.TASKS_START:
      return {
        ...state,
        loading: true,
        error: false,
        errResponse: '',
        menteeSubmittedTask: { loading: false, data: null },
      };

    case types.TASKS_SUCCESS:
      return {
        ...state,

        loading: false,
        error: false,
        errResponse: '',
        menteeSubmittedTask: { loading: false },
        data: action.payload,
      };
    case types.MENTOR_SUBMISSIONS:
      return {
        ...state,
        error: false,
        loading: false,
        menteeSubmittedTask: { loading: false },
        errResponse: '',
        mentorTasks: action.payload,
      };

    case types.GET_MENTEE_TASK_SUBMISSION:
      return {
        ...state,
        error: false,
        loading: false,
        errResponse: '',
        menteeSubmittedTask: { loading: true },
      };
    case types.GET_MENTEE_TASK_SUBMISSION_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        errResponse: '',
        menteeSubmittedTask: { loading: false, data: action.payload },
      };
    case types.GET_MENTEE_TASK_SUBMISSION_FAILURE:
      return {
        ...state,
        error: false,
        loading: false,
        errResponse: '',
        menteeSubmittedTask: { loading: false, data: null },
      };

    case types.SUBMIT_TASK:
      return {
        ...state,
        loading: false,
        menteeSubmittedTask: { loading: false },
        error: false,
        errResponse: '',
        taskSubmit: 'success',
      };

    case types.GRADE_TASK:
      return {
        ...state,
        loading: false,
        error: false,
        menteeSubmittedTask: { loading: false },
        errResponse: '',
        gradeTask: 'success',
      };

    case types.GET_TASK:
      return {
        ...state,
        loading: false,
        error: false,
        menteeSubmittedTask: { loading: false },
        errResponse: '',
        singleTask: action.payload,
      };

    case types.TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        menteeSubmittedTask: { loading: false },

        errResponse: action.payload,
      };
    case types.TASKS_RESET:
      return {
        ...state,
        loading: false,
        error: false,
        menteeSubmittedTask: { loading: false },

        errResponse: '',
      };

    default:
      return state;
  }
}
