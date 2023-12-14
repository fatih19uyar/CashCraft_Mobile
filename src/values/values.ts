import {
  CardData,
  CardStyle,
  Option,
  TransactionData,
  TransactionStatus,
} from '../types/type';

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
    cardExpiration: '12/25',
    cardType: 'master',
    cardNickName: 'Primary Card',
    cardStyle: CardStyle.BANK,
  },
  {
    cardName: 'Jane Smith',
    cardNumber: '9876 5432 1098 7654',
    cardExpiration: '09/24',
    cardType: 'visa',
    cardNickName: 'Personal Card',
    cardStyle: CardStyle.CREDIT,
  },
  {
    cardName: 'Alice Johnson',
    cardNumber: '5555 1234 9876 0011',
    cardExpiration: '03/27',
    cardType: 'master',
    cardNickName: 'Travel Card',
    cardStyle: CardStyle.BANK,
  },
  {
    cardName: 'Bob Brown',
    cardNumber: '1111 2222 3333 4444',
    cardExpiration: '08/26',
    cardType: 'visa',
    cardNickName: 'Work Card',
    cardStyle: CardStyle.CREDIT,
  },
  {
    cardName: 'Elena Garcia',
    cardNumber: '7777 8888 9999 0000',
    cardExpiration: '11/23',
    cardType: 'master',
    cardNickName: 'Emergency Card',
    cardStyle: CardStyle.BANK,
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

export const transactionsMockData: TransactionData = {
  _id: '657aff59bbaeb62f3a7e3024',
  createDate: new Date().toISOString(),
  currency: {
    _id: '651c2a379df68b8fc3d6cc06',
    code: 'TRY',
    name: 'Türk Lirası',
    symbol: '₺',
  },
  price: Math.floor(Math.random() * 100).toString(),
  qrCode:
    'data:image/png;base64,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',
  status: TransactionStatus.COMPLETED,
  subtitle: 'Demo',
  title: 'firma test',
};
