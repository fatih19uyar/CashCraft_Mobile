import {AxiosResponse} from 'axios';
import Api from '.';
import {CardData, CardState} from '../types/type';

const CardService = {
  createCard: (cardData: CardData): Promise<AxiosResponse<CardData>> => {
    return Api.post('/cards/createCard', cardData);
  },

  updateCard: (
    cardId: string,
    cardData: any,
  ): Promise<AxiosResponse<CardData>> => {
    return Api.put(`/cards/${cardId}`, cardData);
  },

  deleteCard: (cardId: string): Promise<AxiosResponse<string>> => {
    return Api.delete(`/cards/${cardId}`);
  },

  getAllCards: (): Promise<AxiosResponse<CardState['cards']>> => {
    return Api.get(`/cards/getCardsByUser`);
  },

  getCardsByUserIdAndCardType: (
    cardType: string,
  ): Promise<AxiosResponse<CardData[]>> => {
    return Api.get(`/cards/getCardsByUserIdAndCardType/${cardType}`);
  },
};

export default CardService;
