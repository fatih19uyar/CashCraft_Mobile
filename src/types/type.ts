import {WrappedFieldProps} from 'redux-form';
export interface User {
  id: string;
  email: string;
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
}
export interface TextViewProps {
  textColor: string;
  textSize: number;
  textStyle: FontWeight;
  textMargin: number | {top?: number; bottom?: number};
  text: string;
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

export interface InputProps extends WrappedFieldProps {
  label: string;
  secret?: boolean;
}
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}
export interface Campaign {
  campName: string;
  campImg: string;
  campDetails: string;
}
export interface TobBarItem {
  bigText: string;
  smallText: string;
}
