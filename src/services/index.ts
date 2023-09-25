import axios from 'axios';
import config from '../../config';

// Axios yapılandırması
export const axiosInstance = axios.create({
  baseURL: config.BASE_URL,
  timeout: 10000, // İstek zaman aşımı süresi (ms)
});
