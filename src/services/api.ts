import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.22.225.41:3333',
});

export default api;
