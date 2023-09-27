import React from 'react';
import WalletScreenFormFirst from '../screenForms/WalletScreenForm/WalletScreenFormFirst';
import Background from '../components/Background';
import TopBarPage from '../components/TopBarPage';
import {useTranslation} from 'react-i18next';

type WalletScreenProps = {navigation: any};

const WalletScreen: React.FC<WalletScreenProps> = ({navigation}) => {
  const {t} = useTranslation();
  const goScreen = (values: string) => {
    navigation.navigate(values);
  };
  const goBack = () => {
    navigation.navigate('Ana Sayfa');
  };
  return (
    <Background imageSet={1}>
      <TopBarPage
        onGoBack={goBack}
        onTobBarItem={{
          bigText: t('MyRegisteredCards'),
        }}
      />
      <WalletScreenFormFirst goScreen={goScreen} />
    </Background>
  );
};

export default WalletScreen;
