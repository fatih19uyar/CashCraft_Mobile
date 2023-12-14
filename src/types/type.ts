import {WrappedFieldProps} from 'redux-form';
export interface User {
  id: string;
  email: string;
}
export interface UserState {
  user: UserInfo | null;
}
export interface UserInfo {
  name: string;
  phoneNumber: string;
  photo: string;
  email: string;
}
export interface UserUpdate {
  email: string;
  phoneNumber: string;
}
export interface LoginUser {
  password: string;
  verificationCode: string;
  email: string;
}
export interface NewUser {
  email: string;
  emailVerificationCode: number;
  userName: string;
  userSurName: string;
  userPhoneNumber: string;
  userPassword: number;
}
export interface Login {
  email_login: string;
  password: string;
  verificationCode: string;
}

export interface PressButtonProps {
  textColor: string;
  onPress?: () => void;
  mode: string;
  text: string;
  borderStatus: boolean;
}
export type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export type PopupMode =
  | 'confirmation'
  | 'success'
  | 'default'
  | 'createdAccount'
  | 'paymentSuccess'
  | 'paymentFail'
  | 'changedPassword';

export interface InputProps extends WrappedFieldProps {
  label: string;
  secret?: boolean;
}
export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  userId: string | null;
}
export interface NavigationState {
  loading: boolean;
  initialRouteName: string;
}
export interface CampaignState {
  campaigns: Campaign[];
  selecetedCampaign: Campaign | null;
}
export interface Campaign {
  campName: string;
  campImg: string;
  campDetails: string;
  campTitle: string;
}

export interface TobBarItem {
  bigText: string;
  smallText?: string;
}
export type Option = {
  label: string;
  status: 'checked' | 'unchecked' | 'indeterminate';
  onPress: () => void;
};
export interface TransactionState {
  transactions: TransactionData[];
  selecetedTransaction: TransactionData | null;
}
export interface TransactionData {
  _id: string;
  title: string;
  subtitle: string;
  createDate: string;
  price: string;
  qrCode: string | null;
  status?: TransactionStatus;
  currency: {
    _id?: string;
    symbol?: string;
    code: string;
    name: string;
  };
}
export interface CreateTransactionReq {
  title: string;
  subtitle: string;
  price: string;
  user: string;
  currency: string;
  card: string;
  status?: TransactionStatus;
}
export interface CreateTransactionRes {
  _id: string;
  title: string;
  subtitle: string;
  price: number;
  user: string;
  currency: string;
  card: string;
  qrCode: string;
  createDate: number;
  status: TransactionStatus;
}
export enum TransactionStatus {
  COMPLETED = 'COMPLETED',
  PENDING = 'PENDING',
  CANCELLED = 'CANCELLED',
}
export interface CardState {
  cards: CardData[];
  selectedCard: CardData | null;
}
export interface CardData {
  cardName: string;
  cardNumber: string;
  cardExpiration: string;
  cardType: 'master' | 'visa';
  cardNickName: string;
  cardStyle: CardStyle;
}
export enum CardStyle {
  GIFT = 'gift',
  STORE = 'store',
  BANK = 'bank',
  CREDIT = 'credit',
}
export enum PaymentCardStyle {
  BANK = 'bank',
  CREDIT = 'credit',
  WALLET = 'wallet',
  ANOTHER = 'another',
}
export interface ReservationDetail {
  title: string;
  description: string;
  date: string;
  id: number;
}
export interface PaymentDetails {
  companyName: string;
  price: string;
  currency: string;
}

export interface LoginRecordData {
  userId: string;
  type: LoginRecordType;
  ipAddress: string;
  deviceInfo: string;
}
export enum LoginRecordType {
  SIGNIN = 'SIGNIN',
  SIGNOUT = 'SIGNOUT',
}
export type DeviceInfoType = {
  uniqueId: string;
};
export type userData = {
  token: string;
  userId: string;
};
export type WalletCardType = {
  cardNumber: string;
  cardName: string;
  currency: string;
  balance: number;
  expirationDate?: Date;
  cardStatus?: string;
};
