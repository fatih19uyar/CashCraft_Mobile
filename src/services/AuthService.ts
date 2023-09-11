import axios, {AxiosResponse, AxiosError} from 'axios';
import config from '../../config';

// Sunucu URL'i
const API_BASE_URL = config.BASE_URL; // Sunucu API URL'inizi buraya ekleyin

// Axios yapılandırması
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // İstek zaman aşımı süresi (ms)
});

// Sunucu isteklerini yöneten servis
const AuthService = {
  signUp: (userData: any): Promise<AxiosResponse> => {
    return axiosInstance.post('/auth/signup', userData);
  },

  signIn: (credentials: {
    email: string;
    password: string;
  }): Promise<AxiosResponse> => {
    return axiosInstance.post('/auth/signin', credentials);
  },

  forgotPassword: (email: string): Promise<AxiosResponse> => {
    return axiosInstance.post('/auth/forgotPassword', {email});
  },

  resetPassword: (
    email: string,
    resetCode: string,
    newPassword: string,
  ): Promise<AxiosResponse> => {
    return axiosInstance.post('/auth/resetPassword', {
      email,
      resetCode,
      newPassword,
    });
  },

  sendVerificationCodeByEmail: (email: string): Promise<AxiosResponse> => {
    return axiosInstance.post('/auth/sendEmailActivationCode', {email});
  },
  checkEmailExists: (email: string): Promise<AxiosResponse> => {
    return axiosInstance.post('/auth/checkEmailExists', {email});
  },

  verifyEmailActivationCode: (
    email: string,
    verificationCode: string,
  ): Promise<AxiosResponse> => {
    return axiosInstance.post('/auth/verifyEmailActivationCode', {
      email,
      verificationCode,
    });
  },
};

export default AuthService;
