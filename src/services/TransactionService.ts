import {AxiosResponse} from 'axios';
import Api from '.';
import {
  TransactionData,
  CreateTransactionReq,
  CreateTransactionRes,
} from '../types/type';

// İşlem işlemlerini yöneten servis

const TransactionService = {
  getAllTransactions: (): Promise<AxiosResponse<TransactionData[]>> => {
    return Api.get('/transactions/getAllTransactions');
  },

  getTransactionById: (
    transactionId: string,
  ): Promise<AxiosResponse<TransactionData>> => {
    return Api.get(`/transactions/${transactionId}`);
  },

  getTransactionsByUserId: (
    userId: string,
  ): Promise<AxiosResponse<TransactionData[]>> => {
    return Api.get(`/transactions/getTransactionByUserId/${userId}`);
  },

  createTransaction: (
    transactionData: CreateTransactionReq,
  ): Promise<AxiosResponse<CreateTransactionRes>> => {
    return Api.post('/transactions/createTransaction', transactionData);
  },

  updateTransaction: (
    transactionId: string,
    transactionData: TransactionData,
  ): Promise<AxiosResponse<TransactionData>> => {
    return Api.put(`/transactions/${transactionId}`, transactionData);
  },

  deleteTransaction: (
    transactionId: string,
  ): Promise<AxiosResponse<string>> => {
    return Api.delete(`/transactions/${transactionId}`);
  },
};

export default TransactionService;
