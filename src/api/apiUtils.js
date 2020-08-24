import axios from 'axios';

const codeClanApi = axios.create({
  baseURL: 'https://codeclannigeria-api.herokuapp.com',
});

codeClanApi.interceptors.request.use(function (config) {
  const token = localStorage.getItem('codeclan_token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default codeClanApi;
