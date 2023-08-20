import React from 'react';
import {ImagesData} from '../assets/ImageManager';

export const [items] = React.useState([
  {
    key: 1,
    name: 'Alışveriş',
    amount: 356,
    date: '2023-07-29',
  },
  {
    key: 2,
    name: 'Fatura Ödeme',
    amount: 262,
    date: '2023-07-30',
  },
  {
    key: 3,
    name: 'Transfer',
    amount: 159,
    date: '2023-07-28',
  },
  {
    key: 4,
    name: 'Ödeme',
    amount: 333,
    date: '2023-07-28',
  },
]);
export const campaigns = [
  {
    campName: 'Burger',
    campImg: ImagesData.burgerKing,
    campDetails:
      'BurgerKing’den yapacağın ilk Cüzdan alışverişinde toplan 110 TL’ye varan nakit kazan.' +
      'Bu kampanya 2023 Ağustos sonuna kadar geçerli.',
    campTitle: '%10 anında nakit kazan',
  },
  {
    campName: 'Uber',
    campImg: ImagesData.uber,
    campDetails:
      'Uber’den yapacağın ilk Cüzdan alışverişinde toplan 200 TL’ye varan nakit kazan.' +
      'Bu kampanya 2023 Ağustos sonuna kadar geçerli.',
    campTitle: '%15 anında nakit kazan',
  },
  {
    campName: 'Trendyol',
    campImg: ImagesData.trendyol,
    campDetails:
      'Trendyol’dan yapacağın ilk Cüzdan alışverişinde toplan 300 TL’ye varan nakit kazan.' +
      'Bu kampanya 2023 Ağustos sonuna kadar geçerli.',
    campTitle: '%20 anında nakit kazan',
  },
  {
    campName: 'Defacto',
    campImg: ImagesData.defacto,
    campDetails:
      'Defacto’den yapacağın ilk Cüzdan alışverişinde toplan 200 TL’ye varan nakit kazan.' +
      'Bu kampanya 2023 Ağustos sonuna kadar geçerli.',
    campTitle: '%30 anında nakit kazan',
  },
];
