import React, {useState} from 'react';
import WalletScreenFormFirst from '../screenForms/WalletScreenForm/WalletScreenFormFirst';
import Background from '../components/Background';
import NewBankCardScreenForm from '../screenForms/MyCardScreen/NewBankCardScreenForm';

type WalletScreenProps = {navigation: any};

const WalletScreen: React.FC<WalletScreenProps> = ({navigation}) => {
  const goScreen = (values: string) => {
    navigation.navigate(values);
  };

  return (
    <Background imageSet={1}>
      <WalletScreenFormFirst goScreen={goScreen} />
    </Background>
  );
};

export default WalletScreen;
