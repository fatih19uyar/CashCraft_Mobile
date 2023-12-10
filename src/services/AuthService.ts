import {AxiosResponse} from 'axios';
import Api from '.';

// Sunucu URL'i

// Sunucu isteklerini yöneten servis
const AuthService = {
  signUp: (userData: any): Promise<AxiosResponse> => {
    return Api.post('/auth/signup', userData);
  },

  signIn: (credentials: {
    email: string;
    password: string;
  }): Promise<AxiosResponse> => {
    return Api.post('/auth/signin', credentials);
  },

  forgotPassword: (email: string): Promise<AxiosResponse> => {
    return Api.post('/auth/forgotPassword', {email});
  },

  resetPassword: (
    email: string,
    resetCode: string,
    newPassword: string,
  ): Promise<AxiosResponse> => {
    return Api.post('/auth/resetPassword', {
      email,
      resetCode,
      newPassword,
    });
  },

  sendVerificationCodeByEmail: (email: string): Promise<AxiosResponse> => {
    return Api.post('/auth/sendEmailActivationCode', {email});
  },

  checkEmailExists: (email: string): Promise<AxiosResponse> => {
    return Api.post('/auth/checkEmailExists', {email});
  },
  checkPhoneNumberExists: (phoneNumber: string): Promise<AxiosResponse> => {
    return Api.post('/auth/checkPhoneNumberExists', {phoneNumber});
  },
  verifyPhoneActivationCode: (
    verificationCode: string,
    email: string,
  ): Promise<AxiosResponse> => {
    return Api.post('/auth/verifyPhoneActivationCode', {
      verificationCode,
      email,
    });
  },
  verifyResetCode: (
    verificationCode: string,
    email: string,
  ): Promise<AxiosResponse> => {
    return Api.post('/auth/verifyResetCode', {
      verificationCode,
      email,
    });
  },

  verifyEmailActivationCode: (
    email: string,
    verificationCode: string,
  ): Promise<AxiosResponse> => {
    return Api.post('/auth/verifyEmailActivationCode', {
      email,
      verificationCode,
    });
  },
  verifyConfirmationCode: (
    id: string,
    confirmationCode: string,
  ): Promise<AxiosResponse> => {
    return Api.post('/auth/verifyConfirmationCode', {
      id,
      confirmationCode,
    });
  },
  confirmationCode: (id: string): Promise<AxiosResponse> => {
    return Api.post('/auth/confirmationCode', {
      id,
    });
  },
};

export default AuthService;
