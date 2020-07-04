import { combineReducers } from 'redux';
import { AuthReducer } from './auth/authReducer';
import { TracksReducer } from './tracks/tracksReducer';
import { CoursesReducer } from './courses/coursesReducer';
import { UserReducer } from './user/userReducer';

const MonsterReducer = combineReducers({
  auth: AuthReducer,
  courses: CoursesReducer,
  tracks: TracksReducer,
  user: UserReducer,
});

export default MonsterReducer;
