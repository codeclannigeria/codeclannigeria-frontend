import * as types from './coursesActionTypes';
import codeClanApi from '../../api/apiUtils';
import { store } from '../../index';

export const getSingleCourse = courseId => {
  return dispatch => {
    dispatch({ type: types.COURSES_START });
    const courses = store.getState().courses.data;
    let course;
    if (courses) {
      course = courses.items.filter(item => item.id === courseId);
      return dispatch({ type: types.GET_COURSE, payload: course });
    } else {
      codeClanApi
        .get(`/courses/${courseId}`)
        .then(res => {
          dispatch({ type: types.GET_COURSE, payload: res.data });
        })
        .catch(err => {
          const error_msg = err.response
            ? err.response.data.message
            : 'An error occured';

          dispatch({
            type: types.COURSES_FAILURE,
            payload: error_msg,
          });
        });
    }
  };
};
