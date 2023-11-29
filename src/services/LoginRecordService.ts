import {AxiosResponse} from 'axios';
import Api from '.';

export interface LoginRecordData {
  userId: string;
  type: string;
}

const LoginRecordService = {
  createLoginRecord: (
    loginRecordData: LoginRecordData,
  ): Promise<AxiosResponse> => {
    return Api.post('/loginRecords/createLoginRecord', loginRecordData);
  },

  getLastLogin: (userId: string, type?: string): Promise<AxiosResponse> => {
    const endpoint = type
      ? `/loginRecords/lastLogin/${userId}/${type}`
      : `/loginRecords/lastLogin/${userId}`;
    return Api.get(endpoint);
  },

  updateLoginRecord: (
    loginRecordId: string,
    loginRecordData: LoginRecordData,
  ): Promise<AxiosResponse> => {
    return Api.put(`/loginRecords/${loginRecordId}`, loginRecordData);
  },
};

export default LoginRecordService;
