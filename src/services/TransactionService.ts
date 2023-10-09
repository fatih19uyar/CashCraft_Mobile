import {AxiosResponse} from 'axios';
import {axiosInstance} from '.';

// İşlem işlemlerini yöneten servis

const TransactionService = {
  getAllTransactions: (): Promise<AxiosResponse<any>> => {
    return axiosInstance.get('/transactions/getAllTransactions');
  },

  getTransactionById: (transactionId: string): Promise<AxiosResponse<any>> => {
    return axiosInstance.get(`/transactions/${transactionId}`);
  },

  getTransactionsByUserId: (userId: string): Promise<AxiosResponse<any>> => {
    return axiosInstance.get(`/transactions/getTransactionByUserId/${userId}`);
  },

  createTransaction: (transactionData: any): Promise<AxiosResponse<any>> => {
    return axiosInstance.post(
      '/transactions/createTransaction',
      transactionData,
    );
  },

  updateTransaction: (
    transactionId: string,
    transactionData: any,
  ): Promise<AxiosResponse<any>> => {
    return axiosInstance.put(`/transactions/${transactionId}`, transactionData);
  },

  deleteTransaction: (transactionId: string): Promise<AxiosResponse<any>> => {
    return axiosInstance.delete(`/transactions/${transactionId}`);
  },
};

export default TransactionService;
