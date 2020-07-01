import { combineReducers } from 'redux';
import { AuthReducer } from './auth/authReducer';
import { TracksReducer } from './tracks/tracksReducer';
import { CoursesReducer } from './courses/coursesReducer';

const MonsterReducer = combineReducers({
  auth: AuthReducer,
  courses: CoursesReducer,
  tracks: TracksReducer,
});

export default MonsterReducer;
