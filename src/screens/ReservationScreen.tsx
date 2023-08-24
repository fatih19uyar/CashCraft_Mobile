import React, {useState} from 'react';
import Background from '../components/Background';
import ReservationScreenForm from '../screenForms/ReservationScreen/ReservationScreenForm';
import TopBarPage from '../components/TopBarPage';

type Props = {navigation: any};

const ReservationScreen = (props: Props) => {
  const [smallText, setSmallText] = useState('');
  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <Background imageSet={1}>
      <TopBarPage
        onGoBack={goBack}
        onTobBarItem={{
          bigText: 'Rezervasyonlarım',
          smallText: smallText,
        }}
      />
      <ReservationScreenForm />
    </Background>
  );
};

export default ReservationScreen;
