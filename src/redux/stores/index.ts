import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../slice/authSlice';
import {reducer as formReducer} from 'redux-form';
import campaignsSlice from '../slice/campaignsSlice';
import transactionSlice from '../slice/transactionSlice';
import userSlice from '../slice/userSlice';
import cardsSlice from '../slice/cardsSlice';
import navigationSlice from '../slice/navigationSlice';
import walletCardSlice from '../slice/walletCardSlice';

export const store = configureStore({
  reducer: {
    authReducer: authSlice,
    camgaigns: campaignsSlice,
    transactions: transactionSlice,
    userInfo: userSlice,
    cards: cardsSlice,
    navigation: navigationSlice,
    walletCard: walletCardSlice,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
