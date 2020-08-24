import * as types from './stagesActionTypes';

const initialState = {
  loading: false,
  stages: '',
  error: false,
  errResponse: '',
  trackStages: null,
};

export function StagesReducer(state = initialState, action) {
  switch (action.type) {
    case types.STAGES_START:
      return {
        ...state,
        error: false,
        errResponse: '',
        loading: true,
      };

    case types.STAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errResponse: '',
        stages: action.payload,
      };

    case types.GET_STAGE_WITH_TRACK_ID:
      return {
        ...state,
        loading: false,
        error: false,
        errResponse: '',
        trackStages: action.payload,
      };

    case types.STAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errResponse: action.payload,
      };
    case types.STAGES_RESET:
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
