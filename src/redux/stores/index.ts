import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../slice/authSlice';
import {reducer as formReducer} from 'redux-form';
import campaignsSlice from '../slice/campaignsSlice';
import transactionSlice from '../slice/transactionSlice';
import userSlice from '../slice/userSlice';
import cardsSlice from '../slice/cardsSlice';

export const store = configureStore({
  reducer: {
    authReducer: authSlice,
    camgaigns: campaignsSlice,
    transactions: transactionSlice,
    userInfo: userSlice,
    cards: cardsSlice,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
