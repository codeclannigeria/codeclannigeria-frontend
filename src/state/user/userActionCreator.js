import * as types from './userActionTypes';
import codeClanApi from '../../api/apiUtils';
import { store } from '../../index';

export const getUserProfileApi = () => {
  return dispatch => {
    dispatch({ type: types.USER_START });
    return codeClanApi
      .get('profile')
      .then(res => {
        dispatch({ type: types.USER_SUCCESS, payload: res.data });
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

export const getUserMentorProfileApi = () => {
  return dispatch => {
    dispatch({ type: types.USER_START });
    return codeClanApi
      .get('profile/mentors')
      .then(res => {
        dispatch({ type: types.GET_MENTOR, payload: res.data.items });
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
        dispatch({ type: types.GET_MENTEES, payload: res.data.items });
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

export const getSingleMenteeProfile = userId => {
  return dispatch => {
    dispatch({ type: types.USER_START });
    let mentees = store.getState().user.mentees;

    let mentee;
    // if (!mentees.mentees) {
    //   dispatch(getUserMenteesProfileApi());

    //   mentee = store
    //     .getState()
    //     .users.mentees.items.filter(item => item.id === userId);
    // } else {
    // }
    if (mentees) {
      mentee = mentees.filter(item => item.id === userId);
      return dispatch({ type: types.GET_MENTEE, payload: mentee });
    } else {
      return codeClanApi
        .get(`profile/mentees`)
        .then(res => {
          res.data.items.filter(item => console.log(item.id, userId));
          dispatch({
            type: types.GET_MENTEE,
            payload: res.data.items.filter(item => item.id === userId),
          });

          // history.push(`/dashboard`)
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
      // return dispatch({ type: types.GET_MENTEE, payload: mentee });
    }
    // } catch (err
    //   const error_msg = err.response
    //     ? err.response.data.message
    //     : 'An error occured';

    // dispatch({
    //   type: types.USER_FAILURE,
    //   payload: error_msg,
    // });
  };
};
// };

export const editUserProfileApi = userData => {
  return dispatch => {
    dispatch({ type: types.USER_START });
    return codeClanApi
      .put('profile', userData)
      .then(res => {
        dispatch({ type: types.EDIT_USER, payload: res.data });
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
