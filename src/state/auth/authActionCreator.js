import * as types from "./authActionTypes"
import axios from "axios"

export const apiURL = "http://codeclannigeria-api.herokuapp.com/auth"

export const signup = (userData) => {
  return (dispatch) => {
    dispatch({ type: types.AUTH_START })
    return axios
      .post(`${apiURL}/register`, userData)
      .then((res) => {
        localStorage.setItem("codeclan_token", res.data)
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
        localStorage.setItem("expirationDate", expirationDate)

        dispatch({ type: types.AUTH_SUCCESS, payload: res.data })
        // history.push(`/dashboard`)
      })
      .catch((err) => {
        console.log(err, err.response)

        dispatch({
          type: types.AUTH_FAILURE,
          payload: err.response.data.message,
        })
      })
  }
}

export const authLogin = (userData) => {
  return function (dispatch) {
    dispatch({ type: types.AUTH_START })

    return axios
      .post(`${apiURL}/login`, userData)
      .then((res) => {
        const token = res.data.key
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
        localStorage.setItem("codeclan_token", token)
        localStorage.setItem("expirationDate", expirationDate)
        dispatch({ type: types.AUTH_SUCCESS, payload: res.data })
      })
      .catch((err) => {
        dispatch({
          type: types.AUTH_FAILURE,
          payload: err.response.data.message,
        })
      })
  }
}
