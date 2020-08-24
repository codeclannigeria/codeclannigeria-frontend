import * as types from './authActionTypes';
import axios from 'axios';
import history from '../../history';

export const apiURL = 'https://codeclannigeria-api.herokuapp.com/auth';

export const signup = userData => {
  return dispatch => {
    dispatch({ type: types.AUTH_START });
    const token_data = {
      email: userData.email,
      clientBaseUrl: 'https://www.codeclannigeria.dev/confirm-email',
      tokenParamName: 'token',
      emailParamName: 'email',
    };
    return axios
      .post(`${apiURL}/register`, userData)
      .then(res => {
        dispatch({ type: types.AUTH_SUCCESS, payload: { token: 'true' } });
        authSendEmailConfirmationToken(token_data);

        // const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        // localStorage.setItem('codeclan_token', res.data);
        // localStorage.setItem('expirationDate', expirationDate);

        // history.push(`/dashboard`)
      })
      .catch(err => {
        const error_msg = err.response
          ? err.response.data.message
          : 'An error occured';

        dispatch({
          type: types.AUTH_FAILURE,
          payload: error_msg,
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
        const token = res.data.accessToken;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem('codeclan_token', token);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch({ type: types.AUTH_SUCCESS, payload: token });
      })
      .catch(err => {
        const error_msg = err.response
          ? err.response.data.message
          : 'An error occured';

        dispatch({
          type: types.AUTH_FAILURE,
          payload: error_msg,
        });
      });
  };
};

export const authLogoutApi = () => {
  return function (dispatch) {
    dispatch({ type: types.AUTH_LOGOUT });
    localStorage.removeItem('codeclan_token');
    localStorage.removeItem('expirationDate');
  };
};

export const authSendEmailConfirmationToken = data => {
  return axios
    .post(`${apiURL}/send-email-confirmation-token`, data)
    .then(res => {
      // Do nothing for now

      return res;
    })
    .catch(err => {
      history.push('/');
      throw err;
    });
};

// {
//   "email": "onasanyatunde67@gmail.com",
//   "clientBaseUrl": "https://google.com",
//   "tokenParamName": "string",
//   "emailParamName": "string"
// }
