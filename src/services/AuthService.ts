import {AxiosResponse} from 'axios';
import {axiosInstance} from '.';

// Sunucu URL'i

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
  checkPhoneNumberExists: (phoneNumber: string): Promise<AxiosResponse> => {
    return axiosInstance.post('/auth/checkPhoneNumberExists', {phoneNumber});
  },
  verifyPhoneActivationCode: (
    verificationCode: string,
    email: string,
  ): Promise<AxiosResponse> => {
    return axiosInstance.post('/auth/verifyPhoneActivationCode', {
      verificationCode,
      email,
    });
  },
  verifyResetCode: (
    verificationCode: string,
    email: string,
  ): Promise<AxiosResponse> => {
    return axiosInstance.post('/auth/verifyResetCode', {
      verificationCode,
      email,
    });
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
