import {AxiosResponse} from 'axios';
import {axiosInstance} from '.';

// Kullanıcı işlemlerini yöneten servis

const UserService = {
  findUser: (): Promise<AxiosResponse<any>> => {
    return axiosInstance.get(`/users/findUser`);
  },

  updateUser: (userData: any): Promise<AxiosResponse<any>> => {
    return axiosInstance.put(`/users/updateUser`, userData);
  },

  deleteUser: (): Promise<AxiosResponse<any>> => {
    return axiosInstance.delete(`/users/deleteUser`);
  },
};
export default UserService;
