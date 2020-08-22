import * as types from './tracksActionTypes';

const initialState = {
  loading: false,
  data: '',
  error: false,
  errResponse: '',
};

export function TracksReducer(state = initialState, action) {
  switch (action.type) {
    case types.TRACKS_START:
      return {
        ...state,
        error: false,
        errResponse: '',
        loading: true,
      };

    case types.TRACKS_SUCCESS:
      return {
        ...state,
        loading: false,
        loading: false,
        error: false,
        errResponse: '',
        data: action.payload,
      };

    case types.TRACKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errResponse: action.payload,
      };
    case types.TRACKS_RESET:
      return {
        ...state,
        loading: false,
        error: false,
        errResponse: '',
      };

    default:
      return state;
  }
}
