import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthState, User} from '../../types/type';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  token: null, // başlangıçta token boş
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{user: User; token: string}>, // Eklendi: token action.payload içerisine ekleniyor
    ) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
      state.token = action.payload.token; // Eklendi: token state içerisine ekleniyor
      AsyncStorage.setItem('user', JSON.stringify(action.payload.user));
      AsyncStorage.setItem('token', action.payload.token); // Eklendi: token AsyncStorage'e kaydediliyor
    },
    logOut: state => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      state.token = null; // Eklendi: token siliniyor
      AsyncStorage.removeItem('user');
      AsyncStorage.removeItem('token'); // Eklendi: token AsyncStorage'den siliniyor
    },
  },
});

export const {loginSuccess, logOut} = authSlice.actions;

export default authSlice.reducer;
