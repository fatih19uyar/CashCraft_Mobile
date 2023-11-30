import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthState} from '../../types/type';
import {resetCampaigns} from './campaignsSlice';
import {resetTrasaction} from './transactionSlice';
import {resetCards} from './cardsSlice';

const initialState: AuthState = {
  token: '',
  isAuthenticated: false,
  loading: false,
  userId: '',
};

export const logOut = createAsyncThunk('auth/full', async (_, {dispatch}) => {
  dispatch(resetCampaigns());
  dispatch(resetTrasaction());
  dispatch(resetCards());
  dispatch(logOutApp());
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{token: string; userId: string}>,
    ) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
      state.userId = action.payload.userId;
      // Kullanıcı bilgilerini AsyncStorage'e kaydetme
      AsyncStorage.setItem(
        'userData',
        JSON.stringify({token: action.payload, userId: action.payload.userId}),
      );
    },
    logOutApp: state => {
      state.token = '';
      state.isAuthenticated = false;
      AsyncStorage.removeItem('userData');
    },
  },
});

export const {loginSuccess, logOutApp} = authSlice.actions;

export default authSlice.reducer;
