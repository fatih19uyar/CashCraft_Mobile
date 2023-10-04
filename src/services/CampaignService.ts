import {AxiosResponse} from 'axios';
import {axiosInstance} from '.';

// Kampanya işlemlerini yöneten servis

const CampaignService = {
  getAllCampaigns: (): Promise<AxiosResponse<any>> => {
    return axiosInstance.get('/campaigns/getAllCampaigns');
  },

  getCampaignById: (campaignId: string): Promise<AxiosResponse<any>> => {
    return axiosInstance.get(`/campaigns/${campaignId}`);
  },

  updateCampaign: (
    campaignId: string,
    campaignData: any,
  ): Promise<AxiosResponse<any>> => {
    return axiosInstance.put(`/campaigns/${campaignId}`, campaignData);
  },

  deleteCampaign: (campaignId: string): Promise<AxiosResponse<any>> => {
    return axiosInstance.delete(`/campaigns/${campaignId}`);
  },
};

export default CampaignService;
