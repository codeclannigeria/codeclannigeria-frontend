import * as types from './tasksActionTypes';

const initialState = {
  loading: false,
  data: '',
  error: false,
  errResponse: '',
  singleTask: null,
  taskSubmit: '',
  menteeSubmittedTasks: null,
  mentorTasks: null,
  singleMenteeSubmittedTask: { loading: null, data: null },
};

export function TaskReducer(state = initialState, action) {
  switch (action.type) {
    case types.TASKS_START:
      return {
        ...state,
        loading: true,
        error: false,
        errResponse: '',
        singleMenteeSubmittedTask: { loading: false, data: null },
        gradeTask: '',
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
    case types.MENTEE_SUBMITTED_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errResponse: '',
        singleMenteeSubmittedTask: { loading: false },
        menteeSubmittedTasks: action.payload,
      };
    case types.MENTOR_SUBMISSIONS:
      return {
        ...state,
        error: false,
        loading: false,
        singleMenteeSubmittedTask: { loading: false },
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
        singleMenteeSubmittedTask: { loading: false, data: action.payload },
      };
    case types.GET_MENTEE_TASK_SUBMISSION_FAILURE:
      return {
        ...state,
        error: false,
        loading: false,
        errResponse: '',
        singleMenteeSubmittedTask: { loading: false, data: null },
      };

    case types.SUBMIT_TASK:
      const newPendingTasks = state.data.items
        .slice()
        .filter(task => task.id !== action.payload);
      const submittedTask = state.data.items
        .slice()
        .filter(task => task.id === action.payload);
      const newCompletedTasks = [
        ...state.menteeSubmittedTasks.items,
        submittedTask[0],
      ];
      return {
        ...state,
        loading: false,
        singleMenteeSubmittedTask: { loading: false },
        error: false,
        errResponse: '',
        taskSubmit: 'success',
        data: { items: newPendingTasks, totalCount: newPendingTasks.length },
        menteeSubmittedTasks: {
          items: newCompletedTasks,
          totalCount: newCompletedTasks.length,
        },
      };

    case types.GRADE_TASK:
      return {
        ...state,
        loading: false,
        error: false,
        singleMenteeSubmittedTask: { loading: false },
        errResponse: '',
        gradeTask: 'success',
      };

    case types.GET_TASK:
      return {
        ...state,
        loading: false,
        error: false,
        singleMenteeSubmittedTask: { loading: false },
        errResponse: '',
        singleTask: action.payload,
      };

    case types.TASKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        singleMenteeSubmittedTask: { loading: false },

        errResponse: action.payload,
      };
    case types.TASKS_RESET:
      return {
        ...state,
        loading: false,
        error: false,
        singleMenteeSubmittedTask: { loading: false },
        errResponse: '',
        gradeTask: '',
      };

    default:
      return state;
  }
}
