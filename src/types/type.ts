import {WrappedFieldProps} from 'redux-form';
export interface User {
  id: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  token: string | null; // kullanıcı oturum açtığında alınan token'ı tutacak
}

export interface PressButtonProps {
  textColor: string;
  onPress?: () => void;
  mode: string;
  text: string;
}

export interface InputProps extends WrappedFieldProps {
  label: string;
  secret?: boolean;
}
