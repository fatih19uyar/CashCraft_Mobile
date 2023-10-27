// authSlice.ts

import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {CardState} from '../../types/type';
import CardService from '../../services/CardService';

const initialState: CardState = {
  cards: [],
  selectedCard: null,
};
export const getAllCards = createAsyncThunk('card/getAll', async () => {
  try {
    const response = await CardService.getAllCards();
    return response.data ?? [];
  } catch (error) {
    console.log('Get Cards Error', error);
    return [];
  }
});

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setSelectedCard: (
      state,
      action: PayloadAction<CardState['selectedCard']>,
    ) => {
      state.selectedCard = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCards.pending, (state, action) => {})
      .addCase(getAllCards.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(getAllCards.fulfilled, (state, aciton) => {
        state.cards = aciton.payload;
      });
  },
});
export const {setSelectedCard} = cardsSlice.actions;
export default cardsSlice.reducer;
