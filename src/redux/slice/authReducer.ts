// authSlice.ts

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthState} from '../../types/type';

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{id: string; email: string}>,
    ) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
      // Kullanıcı bilgilerini AsyncStorage'e kaydetme
      AsyncStorage.setItem('user', JSON.stringify(action.payload));
    },
    logOut: state => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      // Kullanıcı bilgilerini AsyncStorage'e silme
      AsyncStorage.removeItem('user');
    },
  },
});

export const {loginSuccess, logOut} = authSlice.actions;

export default authSlice.reducer;
