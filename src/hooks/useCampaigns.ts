import {useEffect} from 'react';
import {
  getAllCampaigns,
  setSelectedCampaign,
} from '../redux/slice/campaignsSlice';
import {useAppDispatch, useAppSelector} from './useStore';
import {shallowEqual} from 'react-redux';
import {Campaign, CampaignState} from '../types/type';

// tsrfc
export default function useCampaigns() {
  const dispatch = useAppDispatch();
  const {campaignList, selectedCampaign} = useAppSelector(
    state => ({
      campaignList: state.camgaigns.campaigns,
      selectedCampaign: state.camgaigns.selecetedCampaign,
    }),
    shallowEqual,
  );
  useEffect(() => {
    if (campaignList.length === 0) dispatch(getAllCampaigns());
  }, [campaignList]);
  const handleSelectCampaign = (
    newCampaign: CampaignState['selecetedCampaign'],
  ) => {
    dispatch(setSelectedCampaign(newCampaign));
  };
  return {campaigns: campaignList, selectedCampaign, handleSelectCampaign};
}
