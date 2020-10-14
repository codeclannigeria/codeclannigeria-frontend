import * as types from './tasksActionTypes';
import codeClanApi from '../../api/apiUtils';

export const getAllTasksAction = trackId => {
  return async dispatch => {
    dispatch({ type: types.TASKS_START });
    return codeClanApi
      .get('/tasks')
      .then(res => {
        const tasks = res.data.items.filter(task => task.track === trackId);
        const submittedTasksUnfiltered = async () => {
          return Promise.all(tasks.map(task => checkTaskSubmission(task)));
        };
        // const submittedTasks = submittedTasksUnfiltered().then(
        //   res => res !== undefined
        // );
        const submittedTasks = submittedTasksUnfiltered()
          .then(res => {
            return res.filter(task => task !== undefined);
          })
          .then(submitted => {
            const unsubmittedTasks = tasks.filter(
              ({ id: id1 }) => !submitted.some(({ id: id2 }) => id2 === id1)
            );
            console.log(tasks);
            console.log(submitted);
            const tasksObj = {
              items: unsubmittedTasks,
              totalCount: unsubmittedTasks.length,
            };
            const submittedTasksObj = {
              items: submitted,
              totalCount: submitted.length,
            };
            dispatch({
              type: types.MENTEE_SUBMITTED_TASKS_SUCCESS,
              payload: submittedTasksObj,
            });
            dispatch({ type: types.TASKS_SUCCESS, payload: tasksObj });
          });

        // console.log(submittedTasks());

        // history.push(`/dashboard`)
      })
      .catch(err => {
        const error_msg = err.response
          ? err.response.data.message
          : 'An error occurred';

        dispatch({
          type: types.TASKS_FAILURE,
          payload: error_msg,
        });
      });
  };
};

export const getSingleTaskAction = id => {
  return dispatch => {
    dispatch({ type: types.TASKS_START });
    return codeClanApi
      .get(`/tasks/${id}`)
      .then(res => {
        dispatch({ type: types.GET_TASK, payload: res.data });
        // history.push(`/dashboard`)
      })
      .catch(err => {
        const error_msg = err.response
          ? err.response.data.message
          : 'An error occurred';
        dispatch({
          type: types.TASKS_FAILURE,
          payload: error_msg,
        });
      });
  };
};

export const submitTaskAction = (taskId, url, comments) => {
  return dispatch => {
    dispatch({ type: types.TASKS_START });

    return codeClanApi
      .post(`/tasks/${taskId}/submissions`, {
        menteeComment: comments,
        taskUrl: url,
      })
      .then(res => {
        dispatch({ type: types.SUBMIT_TASK, payload: taskId });
        // dispatch(getAllTasksAction())
      })
      .catch(err => {
        const error_msg = err.response
          ? err.response.data.message
          : 'An error occurred';

        dispatch({
          type: types.TASKS_FAILURE,
          payload: error_msg,
        });
      });
  };
};

export const getAllMentorSubmissions = () => {
  return dispatch => {
    dispatch({ type: types.TASKS_START });
    return codeClanApi
      .get('mentors/submissions')
      .then(res => {
        dispatch({ type: types.MENTOR_SUBMISSIONS, payload: res.data.items });
      })
      .catch(err => {
        const error_msg = err.response
          ? err.response.data.message
          : 'An error occurred';

        dispatch({
          type: types.TASKS_FAILURE,
          payload: error_msg,
        });
      });
  };
};

export const gradeTaskAction = data => {
  return dispatch => {
    dispatch({ type: types.TASKS_START });
    // const payloadData = { ...data };
    // const id = data.id;
    // delete payloadData.id;
    // delete payloadData.taskUrl;
    // delete payloadData.menteeComment;
    const { gradePercentage, mentorComment } = data;
    const req = { gradePercentage, mentorComment };
    return codeClanApi
      .post(`/mentors/grade/${data.id}/`, req)
      .then(res => {
        console.log(data);
        dispatch({ type: types.GRADE_TASK, payload: data });
      })
      .catch(err => {
        const error_msg = err.response
          ? err.response.data.message
          : 'An error occurred';

        dispatch({
          type: types.TASKS_FAILURE,
          payload: error_msg,
        });
      });
  };
};

export const checkTaskSubmission = async task => {
  try {
    const res = await codeClanApi.get(`tasks/${task.id}/submissions`);
    if (res.data.totalCount > 0) {
      return task;
    }
  } catch (err) {
    throw err;
  }
};

export const getTaskSubmissionAction = taskId => {
  return dispatch => {
    dispatch({ type: types.GET_MENTEE_TASK_SUBMISSION });
    return codeClanApi
      .get(`tasks/${taskId}/submissions`)
      .then(res => {
        dispatch({
          type: types.GET_MENTEE_TASK_SUBMISSION_SUCCESS,
          payload: res.data.items[0],
        });
      })
      .catch(err => {
        const error_msg = err.response
          ? err.response.data.message
          : 'An error occurred';

        dispatch({
          type: types.GET_MENTEE_TASK_SUBMISSION_FAILURE,
          payload: error_msg,
        });
      });
  };
};
