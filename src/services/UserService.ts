import {AxiosResponse} from 'axios';
import Api from '.';
import {UserInfo} from '../types/type';

// Kullanıcı işlemlerini yöneten servis

const UserService = {
  findUser: (): Promise<AxiosResponse<UserInfo>> => {
    return Api.get(`/users/findUser`);
  },

  updateUser: (userData: any): Promise<AxiosResponse<UserInfo>> => {
    return Api.put(`/users/updateUser`, userData);
  },

  deleteUser: (): Promise<AxiosResponse<string>> => {
    return Api.delete(`/users/deleteUser`);
  },
};
export default UserService;
