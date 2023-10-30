// navigationSlice.ts

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NavigationState} from '../../types/type';

const initialState: NavigationState = {
  loading: false,
  initialRouteName: 'WelcomeScreen',
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    loadingSet: (state, action: PayloadAction<{loading: boolean}>) => {
      state.loading = action.payload.loading;
    },
    initialRouteNameSet: (
      state,
      action: PayloadAction<{initialRouteName: string}>,
    ) => {
      state.initialRouteName = action.payload.initialRouteName;
    },
  },
});

export const {loadingSet, initialRouteNameSet} = navigationSlice.actions;

export default navigationSlice.reducer;
