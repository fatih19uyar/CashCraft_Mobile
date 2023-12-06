import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {WalletCardType} from '../../types/type';
import WalletCardService from '../../services/WalletCardService';

const initialState: WalletCardType = {
  cardNumber: '',
  currency: '',
  balance: 0,
  cardName: '',
  expirationDate: undefined,
};
export const getWalletCard = createAsyncThunk(
  'walletCards/getWalletCardByUserId',
  async () => {
    try {
      const response = await WalletCardService.getWalletCardByUserId();
      return response.data;
    } catch (error) {
      console.log('Get Wallet Card Error', error);
      return initialState;
    }
  },
);

const walletCardSlice = createSlice({
  name: 'walletCard',
  initialState,
  reducers: {
    resetWalletCard: state => {
      state = initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getWalletCard.pending, (state, action) => {})
      .addCase(getWalletCard.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(getWalletCard.fulfilled, (state, aciton) => {
        state.balance = aciton.payload.balance;
        state.cardName = aciton.payload.cardName;
        state.cardNumber = aciton.payload.cardNumber;
        state.currency = aciton.payload.currency;
        state.expirationDate = aciton.payload.expirationDate;
      });
  },
});
export const {resetWalletCard} = walletCardSlice.actions;
export default walletCardSlice.reducer;
