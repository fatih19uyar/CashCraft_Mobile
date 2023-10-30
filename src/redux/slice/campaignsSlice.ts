import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Campaign, CampaignState} from '../../types/type';
import CampaignService from '../../services/CampaignService';

const initialState: CampaignState = {
  campaigns: [],
  selecetedCampaign: null,
};
export const getAllCampaigns = createAsyncThunk(
  'campaigns/getAll',
  async () => {
    try {
      const response = await CampaignService.getAllCampaigns();
      return response.data ?? [];
    } catch (error) {
      console.log('Get Campaigns Error', error);
      return [];
    }
  },
);

const camgaignsSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {
    setSelectedCampaign: (
      state,
      action: PayloadAction<CampaignState['selecetedCampaign']>,
    ) => {
      state.selecetedCampaign = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCampaigns.pending, (state, action) => {})
      .addCase(getAllCampaigns.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(getAllCampaigns.fulfilled, (state, aciton) => {
        state.campaigns = aciton.payload;
      });
  },
});
export const {setSelectedCampaign} = camgaignsSlice.actions;
export default camgaignsSlice.reducer;
