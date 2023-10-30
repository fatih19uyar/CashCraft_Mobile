import axios from 'axios';
import config from '../../config';
import {store} from '../redux/stores';
import {useAppDispatch} from '../hooks/useStore';
import {initialRouteNameSet} from '../redux/slice/navigationSlice';
import {logOut} from '../redux/slice/authSlice';

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
axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 403) {
      const dispatch = useAppDispatch();
      dispatch(initialRouteNameSet({initialRouteName: 'WelcomeScreen'}));
      dispatch(logOut());
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
