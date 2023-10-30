import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {TransactionState} from '../../types/type';
import TransactionService from '../../services/TransactionService';

const initialState: TransactionState = {
  transactions: [],
  selecetedTransaction: null,
};
export const getAllTransactions = createAsyncThunk(
  'transactions/getAll',
  async () => {
    try {
      const response = await TransactionService.getAllTransactions();
      return response.data ?? [];
    } catch (error) {
      console.log('Get Transaction Error', error);
      return [];
    }
  },
);

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setSelectedTransaction: (
      state,
      action: PayloadAction<TransactionState['selecetedTransaction']>,
    ) => {
      state.selecetedTransaction = action.payload;
    },
    resetTrasaction: state => {
      state = initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllTransactions.pending, (state, action) => {})
      .addCase(getAllTransactions.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(getAllTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
      });
  },
});
export const {setSelectedTransaction, resetTrasaction} =
  transactionsSlice.actions;
export default transactionsSlice.reducer;
