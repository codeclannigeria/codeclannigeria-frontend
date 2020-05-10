import * as types from "./actionType";
import axios from "axios";

export const apiURL = "https://cseu3-mud.herokuapp.com/api";


export const signup = (userData) => {
  return (dispatch) => {
    dispatch({ type: types.SIGNUP_START });
    return axios.post(`${apiURL}/register/`, userData)
      .then((res) => {
        localStorage.setItem('token', res.data.key);
        dispatch({ type: types.SIGNUP_SUCCESS, payload: res.data.key });
      })
      .catch((err) => {
        dispatch({ type: types.SIGNUP_FAILURE });
      });
  }
}
