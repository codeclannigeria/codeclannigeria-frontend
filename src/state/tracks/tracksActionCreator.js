import * as types from './tracksActionTypes';
import codeClanApi from '../../api/apiUtils';
import { store } from '../../index';
import {
  getUserProfileApi,
  getUserMentorProfileApi,
} from '../user/userActionCreator';
import { getAllTasksAction } from '../tasks/tasksActionCreator';
import { getAllStagesAction } from '../stages/stagesActionCreator';

export const getSingleTrack = trackId => {
  return dispatch => {
    dispatch({ type: types.TRACKS_START });
    const tracks = store.getState().tracks.data;
    let track;
    if (tracks) {
      track = tracks.items.filter(item => item.id === trackId);
      return dispatch({ type: types.GET_TRACK, payload: track });
    } else {
      codeClanApi
        .get(`/tracks/${trackId}`)
        .then(res => {
          dispatch({ type: types.GET_TRACK, payload: res.data });
        })
        .catch(err => {
          const error_msg = err.response
            ? err.response.data.message
            : 'An error occured';

          dispatch({
            type: types.TRACKS_FAILURE,
            payload: error_msg,
          });
        });
    }
  };
};

export const getTracksAction = () => {
  return dispatch => {
    dispatch({ type: types.TRACKS_START });
    return codeClanApi
      .get('/tracks')
      .then(res => {
        dispatch({ type: types.TRACKS_SUCCESS, payload: res.data });
        dispatch(getAllStagesAction());
        // history.push(`/dashboard`)
      })
      .catch(err => {
        const error_msg = err.response
          ? err.response.data.message
          : 'An error occured';

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
        dispatch(getUserMentorProfileApi());
        dispatch(getAllTasksAction());
        // history.push(`/dashboard`)
      })
      .catch(err => {
        const error_msg = err.response
          ? err.response.data.message
          : 'An error occured';

        dispatch({
          type: types.TRACKS_FAILURE,
          payload: error_msg,
        });
      });
  };
};
