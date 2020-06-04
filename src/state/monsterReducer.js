import { combineReducers } from "redux"
import { AuthReducer } from "./auth/authReducer"

const MonsterReducer = combineReducers({
  auth: AuthReducer,
})

export default MonsterReducer
