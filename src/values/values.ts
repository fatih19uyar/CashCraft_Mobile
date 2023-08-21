import React from 'react';
import {ImagesData} from '../assets/ImageManager';
import {Option, TransactionData} from '../types/type';

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
export const options: Option[] = [
  {label: 'Hepsi', status: 'unchecked', onPress: () => {}},
  {label: 'Kredi Kartı', status: 'unchecked', onPress: () => {}},
  {label: 'Banka Kartı', status: 'unchecked', onPress: () => {}},
  {label: 'Cüzdan Hesap', status: 'unchecked', onPress: () => {}},
];
export const transactionData: TransactionData[] = [
  {
    title: 'H&M Mağazası',
    subtitle: 'Alışveriş',
    time: '21 Temmuz 2023, 15:30',
    rightTitle: '150 TL',
  },
  {
    title: 'Starbucks',
    subtitle: 'Kahve',
    time: '20 Temmuz 2023, 09:45',
    rightTitle: '25 TL',
  },
  {
    title: 'Market Alışverişi',
    subtitle: 'Market',
    time: '19 Temmuz 2023, 18:20',
    rightTitle: '350 TL',
  },
  {
    title: 'Giyim Mağazası',
    subtitle: 'Alışveriş',
    time: '18 Temmuz 2023, 14:15',
    rightTitle: '200 TL',
  },
  {
    title: 'Restoran Yemeği',
    subtitle: 'Restoran',
    time: '17 Temmuz 2023, 20:00',
    rightTitle: '120 TL',
  },
  {
    title: 'Elektronik Mağazası',
    subtitle: 'Alışveriş',
    time: '16 Temmuz 2023, 11:30',
    rightTitle: '800 TL',
  },
  {
    title: 'Spor Salonu Üyeliği',
    subtitle: 'Spor',
    time: '15 Temmuz 2023, 16:45',
    rightTitle: '300 TL',
  },
];
