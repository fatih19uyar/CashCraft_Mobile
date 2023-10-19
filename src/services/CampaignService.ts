import {AxiosResponse} from 'axios';
import Api from '.';
import {CampaignState} from '../types/type';

// Kampanya işlemlerini yöneten servis

const CampaignService = {
  getAllCampaigns: (): Promise<AxiosResponse<CampaignState['campaigns']>> => {
    return Api.get('/campaigns/getAllCampaigns');
  },

  getCampaignById: (campaignId: string): Promise<AxiosResponse<any>> => {
    return Api.get(`/campaigns/${campaignId}`);
  },

  updateCampaign: (
    campaignId: string,
    campaignData: any,
  ): Promise<AxiosResponse<any>> => {
    return Api.put(`/campaigns/${campaignId}`, campaignData);
  },

  deleteCampaign: (campaignId: string): Promise<AxiosResponse<any>> => {
    return Api.delete(`/campaigns/${campaignId}`);
  },
};

export default CampaignService;
