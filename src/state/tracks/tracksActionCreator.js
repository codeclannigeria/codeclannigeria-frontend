import * as types from './tracksActionTypes';
import codeClanApi from '../../api/apiUtils';
import { getUserProfileApi } from '../user/userActionCreator';

export const getTracksAction = () => {
  return dispatch => {
    dispatch({ type: types.TRACKS_START });
    return codeClanApi
      .get('/tracks')
      .then(res => {
        dispatch({ type: types.TRACKS_SUCCESS, payload: res.data });
        // history.push(`/dashboard`)
      })
      .catch(err => {
        const error_msg = err.response.data.message || 'An error occured';

        dispatch({
          type: types.TRACKS_FAILURE,
          payload: error_msg,
        });
      });
  };
};
// tracks/22/enroll

export const userEnrollTrackAction = (trackId, mentorId) => {
  return dispatch => {
    dispatch({ type: types.TRACKS_START });

    return codeClanApi
      .post(`/tracks/${trackId}/enroll`, { mentorId })
      .then(res => {
        dispatch({ type: types.TRACKS_SUCCESS, payload: res.data });
        dispatch(getUserProfileApi());
        // history.push(`/dashboard`)
      })
      .catch(err => {
        const error_msg = err.response.data.message || 'An error occured';

        dispatch({
          type: types.TRACKS_FAILURE,
          payload: error_msg,
        });
      });
  };
};
