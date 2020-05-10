import { combineReducers } from "redux";
import { AuthReducer } from "./reducer";

const MonsterReducer = combineReducers({
  auth:AuthReducer
});

export default MonsterReducer;