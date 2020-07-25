import * as types from './tasksActionTypes';
import codeClanApi from '../../api/apiUtils';

export const getAllTasksAction = () => {
  return dispatch => {
    dispatch({ type: types.TASKS_START });
    return codeClanApi
      .get('/tasks')
      .then(res => {
        dispatch({ type: types.TASKS_SUCCESS, payload: res.data });
        // history.push(`/dashboard`)
      })
      .catch(err => {
        console.log({ err });
        const error_msg = err.response.data.message || 'An error occured';

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
        console.log({ err });
        const error_msg = err.response.data.message || 'An error occured';

        dispatch({
          type: types.TASKS_FAILURE,
          payload: error_msg,
        });
      });
  };
};

export const submitTaskAction = taskId => {
  return dispatch => {
    dispatch({ type: types.TASKS_START });
    return codeClanApi
      .post('/tasks', taskId)
      .then(res => {
        dispatch({ type: types.SUBMIT_TASK });
      })
      .catch(err => {
        console.log({ err });
        const error_msg = err.response.data.message || 'An error occured';

        dispatch({
          type: types.TASKS_FAILURE,
          payload: error_msg,
        });
      });
  };
};
