import React from 'react';
import WalletScreenFormFirst from '../screenForms/WalletScreenForm/WalletScreenFormFirst';
import Background from '../components/Background';
import TopBarPage from '../components/TopBarPage';
import {useTranslation} from 'react-i18next';

type WalletScreenProps = {
  navigation: {
    goBack: () => void;
    replace: (name: string) => void;
    navigate: (name: string) => void;
  };
};

const WalletScreen: React.FC<WalletScreenProps> = ({navigation}) => {
  const {t} = useTranslation();
  const goScreen = (values: string) => {
    navigation.navigate(values);
  };
  return (
    <Background imageSet={1}>
      <TopBarPage
        onTobBarItem={{
          bigText: t('MyRegisteredCards'),
        }}
      />
      <WalletScreenFormFirst goScreen={goScreen} />
    </Background>
  );
};

export default WalletScreen;
