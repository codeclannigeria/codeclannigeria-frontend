import * as types from './authActionTypes';
import axios from 'axios';

export const apiURL = 'https://codeclannigeria-api.herokuapp.com/auth';

export const signup = userData => {
  return dispatch => {
    dispatch({ type: types.AUTH_START });
    const token_data = {
      email: 'onasanyatunde67@gmail.com',
      clientBaseUrl: 'https://codeclannigeria-frontend.now.sh/',
      tokenParamName: 'token',
      emailParamName: 'email',
    };
    return axios
      .post(`${apiURL}/register`, userData)
      .then(res => {
        const test = authSendEmailConfirmationToken(token_data);
        console.log(test);
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem('codeclan_token', res.data);
        localStorage.setItem('expirationDate', expirationDate);

        dispatch({ type: types.AUTH_SUCCESS, payload: res.data });
        // history.push(`/dashboard`)
      })
      .catch(err => {
        console.log(err, err.response);

        dispatch({
          type: types.AUTH_FAILURE,
          payload: err.response.data.message,
        });
      });
  };
};

export const authLogin = userData => {
  return function (dispatch) {
    dispatch({ type: types.AUTH_START });

    return axios
      .post(`${apiURL}/login`, userData)
      .then(res => {
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem('codeclan_token', token);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch({ type: types.AUTH_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({
          type: types.AUTH_FAILURE,
          payload: err.response.data.message,
        });
      });
  };
};

export const authSendEmailConfirmationToken = data => {
  return axios
    .post(`${apiURL}/send-email-confirmation-token`, data)
    .then(res => {
      // Do nothing for now
      console.log(res);
      return res;
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

// {
//   "email": "onasanyatunde67@gmail.com",
//   "clientBaseUrl": "https://google.com",
//   "tokenParamName": "string",
//   "emailParamName": "string"
// }
