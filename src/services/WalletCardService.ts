import {AxiosResponse} from 'axios';
import Api from '.';
import {WalletCardType} from '../types/type';

const WalletCardService = {
  updateWalletCardBalance: (
    amount: number,
    operation: '+' | '-',
  ): Promise<AxiosResponse<{message: string; newBalance: number}>> => {
    return Api.post('/walletCards/updateWalletCardBalance', {
      amount,
      operation,
    });
  },
  getWalletCardByUserId: (): Promise<AxiosResponse<WalletCardType>> => {
    return Api.get('/walletCards/getWalletCardByUserId');
  },
  deleteWallretCard: (): Promise<AxiosResponse<string>> => {
    return Api.delete('/walletCards/deleteWalletCard');
  },
};

export default WalletCardService;
