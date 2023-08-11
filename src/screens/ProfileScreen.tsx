import React from 'react';
import ProfileScreenForm from '../screenForms/ProfileScreenForm';
import TopBarPage from '../components/TopBarPage';
import Background from '../components/Background';

type Props = {navigation: any};

const ProfileScreen = (props: Props) => {
  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <>
      <Background imageSet={1}>
        <TopBarPage
          onGoBack={goBack}
          onTobBarItem={{
            bigText: 'Profilim',
            smallText: '',
          }}
        />
        <ProfileScreenForm />
      </Background>
    </>
  );
};

export default ProfileScreen;
