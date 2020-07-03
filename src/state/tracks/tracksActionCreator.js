import * as types from './tracksActionTypes';
import codeClanApi from '../../api/apiUtils';
import history from '../../history';

export const getTracksAction = () => {
  return dispatch => {
    dispatch({ type: types.TRACKS_START });
    return codeClanApi
      .get(`/tracks`, {
        params: {
          limit: 100,
        },
      })
      .then(res => {
        dispatch({ type: types.TRACKS_SUCCESS, payload: res.data });
        // history.push(`/dashboard`)
      })
      .catch(err => {
        console.log({ err });
        const error_msg = err.response.data.message || 'An error occured';

        dispatch({
          type: types.TRACKS_FAILURE,
          payload: error_msg,
        });
      });
  };
};
