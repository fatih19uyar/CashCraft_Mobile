import React from 'react';
import Background from '../components/Background';
import CampainsScreenForm from '../screenForms/CampainsScreenForm';
import TopBarPage from '../components/TopBarPage';

type Props = {navigation: any};

const CampaignsScreen = (props: Props) => {
  const goBack = () => {
    props.navigation.goBack();
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
        <CampainsScreenForm />
      </Background>
    </>
  );
};

export default CampaignsScreen;
