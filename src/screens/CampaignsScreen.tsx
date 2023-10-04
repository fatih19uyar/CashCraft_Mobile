import React, {useEffect, useState} from 'react';
import Background from '../components/Background';
import CampainsScreenForm from '../screenForms/CampainsScreenForm';
import TopBarPage from '../components/TopBarPage';
import {Campaign} from '../types/type';
import {useTranslation} from 'react-i18next';
import LoadingScreen from '../components/LoadingScreen';
import CampaignService from '../services/CampaignService';
import {AxiosResponse} from 'axios';

type Props = {
  navigation: {
    goBack: () => void;
    replace: (name: string) => void;
    navigate: (name: string) => void;
  };
};

const CampaignsScreen = (props: Props) => {
  const {t} = useTranslation();
  const [loading, setLoading] = useState(true);
  const [campaigns, setCampaign] = useState<Campaign[]>([
    {
      campName: '',
      campImg: '',
      campDetails: '',
      campTitle: '',
    },
  ]);
  const [selectedCampaingData, setSelectedCampaingData] = useState<Campaign>(
    campaigns[0],
  );
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response: AxiosResponse<Campaign[]> =
          await CampaignService.getAllCampaigns();
        const campaigns = response.data;
        setCampaign(campaigns);
        setLoading(false);
      } catch (error) {
        console.error('Kampanyaları alma hatası:', error);
        // Hata durumunu ele alabilirsiniz
      }
    };

    fetchCampaigns();
  }, []);

  const goBack = () => {
    props.navigation.goBack();
  };
  const selectedCampaing = (index: number) => {
    console.log('index', index);
    setSelectedCampaingData(campaigns[index]);
  };
  return (
    <>
      <Background imageSet={1}>
        <TopBarPage
          onGoBack={goBack}
          onTobBarItem={{
            bigText: t('Campaigns'),
          }}
        />
        <CampainsScreenForm
          CampingList={campaigns}
          onPressCampaing={selectedCampaing}
          selectedCampaign={selectedCampaingData}
        />
      </Background>
      <LoadingScreen visible={loading} />
    </>
  );
};

export default CampaignsScreen;
