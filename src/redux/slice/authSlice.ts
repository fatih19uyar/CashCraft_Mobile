import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthState} from '../../types/type';

const initialState: AuthState = {
  token: '',
  isAuthenticated: false,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{token: string}>) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
      // Kullanıcı bilgilerini AsyncStorage'e kaydetme
      AsyncStorage.setItem('token', action.payload.token);
    },
    logOut: state => {
      state.token = '';
      state.isAuthenticated = false;
      state.loading = false;
      // Kullanıcı bilgilerini AsyncStorage'e silme
      AsyncStorage.removeItem('token');
    },
  },
});

export const {loginSuccess, logOut} = authSlice.actions;

export default authSlice.reducer;
