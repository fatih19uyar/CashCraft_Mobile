import React, {useState} from 'react';
import Background from '../components/Background';
import CampainsScreenForm from '../screenForms/CampainsScreenForm';
import TopBarPage from '../components/TopBarPage';
import {campaigns} from '../values/values';
import {Campaign} from '../types/type';

type Props = {navigation: any};

const CampaignsScreen = (props: Props) => {
  const [selectedCampaingData, setSelectedCampaingData] = useState<Campaign>(
    campaigns[0],
  );
  console.log(selectedCampaingData);
  const goBack = () => {
    props.navigation.goBack();
  };
  const selectedCampaing = (index: number) => {
    console.log('index', index);
    setSelectedCampaingData(campaigns[index]);
  };
  return (
    <>
      <Background imageSet={2}>
        <TopBarPage
          onGoBack={goBack}
          onTobBarItem={{
            bigText: 'Kampanyalar',
            smallText: '',
          }}
        />
        <CampainsScreenForm
          CampingList={campaigns}
          onPressCampaing={selectedCampaing}
          selectedCampaing={selectedCampaingData}
        />
      </Background>
    </>
  );
};

export default CampaignsScreen;
