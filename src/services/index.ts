import axios from 'axios';
import config from '../../config';
import {store} from '../redux/stores';

// Axios yapılandırması
const axiosInstance = axios.create({
  baseURL: config.BASE_URL,
  timeout: 10000, // İstek zaman aşımı süresi (ms)
});
axiosInstance.interceptors.request.use(
  async config => {
    const token = store.getState().authReducer.token;
    if (Boolean(token)) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
export default axiosInstance;
