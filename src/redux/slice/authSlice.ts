import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthState} from '../../types/type';
import {RootState} from '../stores';
import {resetCampaigns} from './campaignsSlice';
import {resetTrasaction} from './transactionSlice';
import {resetCards} from './cardsSlice';

const initialState: AuthState = {
  token: '',
  isAuthenticated: false,
  loading: false,
};

export const logOut = createAsyncThunk('auth/full', async (_, {dispatch}) => {
  dispatch(resetCampaigns());
  dispatch(resetTrasaction());
  dispatch(resetCards());
  dispatch(logOutApp());
  AsyncStorage.removeItem('token');
});

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
    logOutApp: state => {
      state = initialState;
    },
  },
});

export const {loginSuccess, logOutApp} = authSlice.actions;

export default authSlice.reducer;
