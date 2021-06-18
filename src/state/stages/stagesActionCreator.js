import * as types from './stagesActionTypes';
import codeClanApi from '../../api/apiUtils';
import { store } from '../../index';

export const getAllStagesAction = () => {
  return dispatch => {
    dispatch({ type: types.STAGES_START });
    return codeClanApi
      .get('/stages')
      .then(res => {
        dispatch({ type: types.STAGES_SUCCESS, payload: res.data.items });

        // history.push(`/dashboard`)
      })
      .catch(err => {
        const error_msg = err.response
          ? err.response.data.message
          : 'An error occured';

        dispatch({
          type: types.STAGES_FAILURE,
          payload: error_msg,
        });
      });
  };
};

export const getAllTrackStagesAction = trackId => {
  return dispatch => {
    dispatch({ type: types.STAGES_START });
    const stages = store.getState().stages.stages;
    if (stages) {
      const trackStages = stages.filter(item => item.track.id === trackId);
      return dispatch({
        type: types.GET_STAGE_WITH_TRACK_ID,
        payload: trackStages,
      });
    } else {
      codeClanApi
        .get(`/stages?limit=100&search={"track": "${trackId}"}`)
        .then(res => {
          dispatch({
            type: types.GET_STAGE_WITH_TRACK_ID,
            payload: res.data.items,
          });

          // history.push(`/dashboard`)
        })
        .catch(err => {
          const error_msg = err.response
            ? err.response.data.message
            : 'An error occured';

          dispatch({
            type: types.STAGES_FAILURE,
            payload: error_msg,
          });
        });
    }
  };
};
