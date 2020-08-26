import axios from 'axios';
import { store } from '../index';

const codeClanApi = axios.create({
  baseURL: 'https://codeclannigeria-api.herokuapp.com',
});

codeClanApi.interceptors.request.use(
  config => {
    /** In dev, intercepts request and logs it into console for dev */
    const token = localStorage.getItem('codeclan_token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const dispatchFailure = message => {
  store.dispatch({
    type: 'API_ERROR',
    payload: message,
  });

  // Clear the error message after 3 secs

  setTimeout(function () {
    store.dispatch({
      type: 'API_SUCCESS',
    });
  }, 3000);
};

codeClanApi.interceptors.response.use(
  response => {
    store.dispatch({
      type: 'API_SUCCESS',
    });
    return response;
  },
  error => {
    if (error.response && error.response.data) {
      dispatchFailure(error.response.data.message);
      // store.dispatch({
      //   type: 'API_ERROR',
      //   payload: error.response.data.message,
      // });

      return Promise.reject(error.response.data);
    }
    dispatchFailure(error.message);

    // store.dispatch({ type: 'API_ERROR', payload: error.message });

    return Promise.reject(error.message);
  }
);

export default codeClanApi;

// axios.interceptors.request.use(
//   config => {
//     /** In dev, intercepts request and logs it into console for dev */
//     const token = localStorage.getItem('codeclan_token');

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     console.info('✉️ ', config);

//     return config;
//   },
//   error => {
//     console.error('✉️ ', error);
//     return Promise.reject(error);
//   }
// );
