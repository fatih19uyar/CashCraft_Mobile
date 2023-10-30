import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {UserState} from '../../types/type';
import UserService from '../../services/UserService';

const initialState: UserState = {
  user: null,
};
export const getUser = createAsyncThunk('users/findUser', async () => {
  try {
    const response = await UserService.findUser();
    return response.data ?? null;
  } catch (error) {
    console.log('Get User Error', error);
    return null;
  }
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUser.pending, (state, action) => {})
      .addCase(getUser.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});
export default userSlice.reducer;
