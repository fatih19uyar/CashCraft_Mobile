import React, {useEffect, useState} from 'react';
import Background from '../components/Background';
import CampainsScreenForm from '../screenForms/CampainsScreenForm';
import TopBarPage from '../components/TopBarPage';
import {Campaign} from '../types/type';
import {useTranslation} from 'react-i18next';
import CampaignService from '../services/CampaignService';
import {AxiosResponse} from 'axios';
import {store} from '../redux/stores';
import useCampaigns from '../hooks/useCampaigns';

type Props = {
  navigation: {
    goBack: () => void;
    replace: (name: string) => void;
    navigate: (name: string) => void;
  };
};

const CampaignsScreen = (props: Props) => {
  const {t} = useTranslation();
  const {campaigns, selectedCampaign, handleSelectCampaign} = useCampaigns();

  const goBack = () => {
    props.navigation.goBack();
  };

  const selectedCampaing = (index: number) => {
    handleSelectCampaign(campaigns[index]);
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
          onPressCampaing={selectedCampaing}
          selectedCampaign={selectedCampaign ? selectedCampaign : null}
          campaigns={campaigns}
        />
      </Background>
    </>
  );
};

export default CampaignsScreen;
