import * as types from './userActionTypes';
import codeClanApi from '../../api/apiUtils';

export const getUserProfileApi = () => {
  return dispatch => {
    dispatch({ type: types.USER_START });
    return codeClanApi
      .get('profile')
      .then(res => {
        dispatch({ type: types.USER_SUCCESS, payload: res.data });
      })
      .catch(err => {
        const error_msg = err.response.data.message || 'An error occured';

        dispatch({
          type: types.USER_FAILURE,
          payload: error_msg,
        });
      });
  };
};

export const getUserMentorProfileApi = () => {
  return dispatch => {
    dispatch({ type: types.USER_START });
    return codeClanApi
      .get('profile/mentors')
      .then(res => {
        dispatch({ type: types.GET_MENTOR, payload: res.data });
      })
      .catch(err => {
        const error_msg = err.response
          ? err.response.data.message
          : 'An error occured';

        dispatch({
          type: types.USER_FAILURE,
          payload: error_msg,
        });
      });
  };
};

export const getUserMenteesProfileApi = () => {
  return dispatch => {
    dispatch({ type: types.USER_START });
    return codeClanApi
      .get('profile/mentees')
      .then(res => {
        dispatch({ type: types.GET_MENTEES, payload: res.data });
      })
      .catch(err => {
        const error_msg = err.response.data.message || 'An error occured';

        dispatch({
          type: types.USER_FAILURE,
          payload: error_msg,
        });
      });
  };
};

export const editUserProfileApi = userData => {
  return dispatch => {
    dispatch({ type: types.USER_START });
    return codeClanApi
      .put('profile', userData)
      .then(res => {
        dispatch({ type: types.EDIT_USER, payload: res.data });
      })
      .catch(err => {
        const error_msg = err.response.data.message || 'An error occured';

        dispatch({
          type: types.USER_FAILURE,
          payload: error_msg,
        });
      });
  };
};
