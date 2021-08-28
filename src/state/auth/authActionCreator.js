import * as types from './authActionTypes';
import axios from 'axios';
import history from '../../history';

export const apiURL = 'https://codeclannigeria-api.herokuapp.com/api/auth';

export const signup = userData => {
  return async dispatch => {
    dispatch({ type: types.AUTH_START });
    const token_data = {
      email: userData.email,
      clientBaseUrl: 'https://www.codeclannigeria.dev/confirm-email',
      tokenParamName: 'token',
      emailParamName: 'email',
    };
    try {
      const res = await axios.post(`${apiURL}/register`, userData);
      dispatch({ type: types.AUTH_SUCCESS, payload: { token: true } });
      authSendEmailConfirmationToken(token_data);
      console.log(res);
    } catch (err) {
      const error_msg = err.response
        ? err.response.data.message
        : 'An error occured';

      dispatch({
        type: types.AUTH_FAILURE,
        payload: error_msg,
      });
    }
  };
};

export const authLogin = userData => {
  return async function (dispatch) {
    dispatch({ type: types.AUTH_START });

    try {
      const res = await axios.post(`${apiURL}/login`, userData);
      const token = res.data.accessToken;
      const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
      localStorage.setItem('codeclan_token', token);
      localStorage.setItem('expirationDate', expirationDate);
      dispatch({ type: types.AUTH_SUCCESS, payload: token });
    } catch (err) {
      const error_msg = err.response
        ? err.response.data.message
        : 'An error occured';

      dispatch({
        type: types.AUTH_FAILURE,
        payload: error_msg,
      });
    }
  };
};

export const authLogoutApi = () => {
  return function (dispatch) {
    dispatch({ type: types.AUTH_LOGOUT });
    localStorage.removeItem('codeclan_token');
    localStorage.removeItem('expirationDate');
  };
};

export const fogetPasswordRequestAction = emailObj => {
  const { email } = emailObj;
  return async dispatch => {
    dispatch({ type: types.AUTH_START });
    const token_data = {
      email,
      clientBaseUrl: 'https://www.codeclannigeria.dev/reset-password',
      tokenParamName: 'token',
      emailParamName: 'email',
    };
    try {
      const res = await axios.post(
        `${apiURL}/send-password-reset-token`,
        token_data
      );
      dispatch({ type: types.AUTH_SUCCESS, payload: { token: true } });
      console.log(res);
    } catch (err) {
      const error_msg = err.response
        ? err.response.data.message
        : 'An error occured';

      dispatch({
        type: types.AUTH_FAILURE,
        payload: error_msg,
      });
    }
  };
};

export const resetPasswordRequestAction = userData => {
  return async dispatch => {
    dispatch({ type: types.AUTH_START });

    try {
      const res = await axios.post(`${apiURL}/reset-password`, userData);
      dispatch({ type: types.AUTH_SUCCESS, payload: { token: true } });
      console.log(res);
    } catch (err) {
      const error_msg = err.response
        ? err.response.data.message
        : 'An error occured';

      dispatch({
        type: types.AUTH_FAILURE,
        payload: error_msg,
      });
    }
  };
};

export const authSendEmailConfirmationToken = async data => {
  try {
    const res = await axios.post(
      `${apiURL}/send-email-confirmation-token`,
      data
    );
    return res;
  } catch (err) {
    history.push('/');
    throw err;
  }
};

// {
//   "email": "onasanyatunde67@gmail.com",
//   "clientBaseUrl": "https://google.com",
//   "tokenParamName": "string",
//   "emailParamName": "string"
// }
