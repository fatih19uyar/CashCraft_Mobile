import {CardData, Option, TransactionData} from '../types/type';

export const items = [
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
];

export const options: Option[] = [
  {label: 'Hepsi', status: 'unchecked', onPress: () => {}},
  {label: 'Kredi Kartı', status: 'unchecked', onPress: () => {}},
  {label: 'Banka Kartı', status: 'unchecked', onPress: () => {}},
  {label: 'Cüzdan Hesap', status: 'unchecked', onPress: () => {}},
];

export const sampleCardData: CardData[] = [
  {
    cardName: 'John Doe',
    cardNumber: '1234 5678 9012 3456',
    cardExpiration: '12/23',
    cardType: 'master',
    cardNickName: 'John Kartı',
  },
  {
    cardName: 'Jane Smith',
    cardNumber: '9876 5432 1098 7654',
    cardExpiration: '09/25',
    cardType: 'visa',
    cardNickName: '',
  },
  {
    cardName: 'Michael Johnson',
    cardNumber: '5678 1234 9012 3456',
    cardExpiration: '06/24',
    cardType: 'master',
    cardNickName: '',
  },
  {
    cardName: 'Emily Davis',
    cardNumber: '4567 8901 2345 6789',
    cardExpiration: '03/22',
    cardType: 'visa',
    cardNickName: 'Emily Kartı',
  },
  {
    cardName: 'William Brown',
    cardNumber: '9876 5432 1098 7654',
    cardExpiration: '11/23',
    cardType: 'master',
    cardNickName: 'William Kartı',
  },
  {
    cardName: 'Olivia Wilson',
    cardNumber: '2345 6789 9012 3456',
    cardExpiration: '08/26',
    cardType: 'visa',
    cardNickName: 'Olivia Kartı',
  },
  {
    cardName: 'Olivia Wilson',
    cardNumber: '2345 6789 9012 3456',
    cardExpiration: '08/26',
    cardType: 'visa',
    cardNickName: 'Olivia Kartı',
  },
];
export const reservationDetails = [
  {
    id: 1,
    title: 'İstanbul - New York Uçuşu',
    description: 'THY uçuşu - Ekonomi',
    date: '2023-08-15',
  },
  {
    id: 2,
    title: 'Ankara - İzmir Uçuşu',
    description: 'Pegasus uçuşu - Business',
    date: '2023-08-20',
  },
  {
    id: 3,
    title: 'Bodrum Tatili',
    description: 'Hilton Bodrum - Deniz Manzaralı Oda',
    date: '2023-08-25',
  },
  {
    id: 4,
    title: 'Prag Gezisi',
    description: 'Turuncu Turlar - 5 Gün 4 Gece',
    date: '2023-09-10',
  },
];
export const payment = {
  companyName: 'Ferdi Denemecilerden',
  price: '-100',
};
