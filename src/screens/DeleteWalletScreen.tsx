import {Text} from 'react-native';
import React from 'react';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import DeleteWalletScreenForm from '../screenForms/DeleteWallet/DeleteWalletScreenForm';

type Props = {navigation: any};

const DeleteWalletScreen = (props: Props) => {
  const goBack = () => {
    props.navigation.goBack();
  };
  const goNext = () => {
    console.log('afeirm');
  };
  return (
    <>
      <BackButton goBack={goBack} />
      <Background imageSet={2}>
        <DeleteWalletScreenForm goNext={goNext} goBack={goBack} />
      </Background>
    </>
  );
};

export default DeleteWalletScreen;
