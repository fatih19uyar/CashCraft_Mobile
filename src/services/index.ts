import axios, {AxiosRequestConfig} from 'axios';
import config from '../../config';

const API_BASE_URL = config.BASE_URL;
// Axios yapılandırması
export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // İstek zaman aşımı süresi (ms)
});
