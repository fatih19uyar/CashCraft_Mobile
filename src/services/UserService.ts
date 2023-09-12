import axios, {AxiosResponse} from 'axios';
import config from '../../config';

// Sunucu URL'i
const API_BASE_URL = config.BASE_URL;
// Axios yapılandırması
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // İstek zaman aşımı süresi (ms)
});

// Kullanıcı işlemlerini yöneten servis
const UserService = {
  findUser: (id: string): Promise<AxiosResponse> => {
    return axiosInstance.get(`/users/findUser/${id}`);
  },

  updateUser: (id: string, userData: any): Promise<AxiosResponse> => {
    return axiosInstance.put(`/users/updateUser/${id}`, userData);
  },

  deleteUser: (id: string): Promise<AxiosResponse> => {
    return axiosInstance.delete(`/users/deleteUser/${id}`);
  },
};

export default UserService;
