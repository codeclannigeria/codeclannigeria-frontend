import { combineReducers } from 'redux';
import { AuthReducer } from './auth/authReducer';
import { TracksReducer } from './tracks/tracksReducer';
import { CoursesReducer } from './courses/coursesReducer';
import { UserReducer } from './user/userReducer';
import { TaskReducer } from './tasks/tasksReducer';
import { StagesReducer } from './stages/stagesReducer';

const APIinitialState = {
  error: null,
};

function APIReducer(state = APIinitialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const MonsterReducer = combineReducers({
  auth: AuthReducer,
  courses: CoursesReducer,
  tracks: TracksReducer,
  user: UserReducer,
  tasks: TaskReducer,
  stages: StagesReducer,
  API: APIReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'AUTH_LOGOUT') {
    state = undefined;
  }
  if (action.type === 'API_ERROR') {
    // alert(action);
    state.API.error = action.payload;
  }
  if (action.type === 'API_SUCCESS') {
    // alert(action);
    state.API.error = null;
  }

  return MonsterReducer(state, action);
};

export default rootReducer;
