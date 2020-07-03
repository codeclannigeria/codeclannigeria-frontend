import axios from 'axios';

const codeClanApi = axios.create({
  baseURL: 'https://codeclannigeria-api.herokuapp.com',
});

codeClanApi.interceptors.request.use(function (config) {
  console.log('Request Sent');
  const token = localStorage.getItem('codeclan_token');
  console.log(token);

  if (token) {
    config.headers.Authorizaion = `Bearer ${token}`;
  }

  return config;
});

export default codeClanApi;
