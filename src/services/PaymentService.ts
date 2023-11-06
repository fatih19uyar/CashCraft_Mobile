import {AxiosResponse} from 'axios';
import Api from '.';
import {CardData} from '../types/type';

const PaymentService = {
  payment: (credentials: {
    creditCardNumber: string;
    cvv: string;
    amount: string;
  }): Promise<AxiosResponse> => {
    console.log(credentials);
    return Api.post('payments/creditCardPayment', credentials);
  },
};

export default PaymentService;
