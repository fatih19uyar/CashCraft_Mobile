import {AxiosResponse} from 'axios';
import Api from '.';
import {CardData} from '../types/type';

const PaymentService = {
  payment: (credentials: {
    cardData: CardData;
    price: string;
  }): Promise<AxiosResponse> => {
    return Api.post('/payment/makePayment', credentials);
  },
};

export default PaymentService;
