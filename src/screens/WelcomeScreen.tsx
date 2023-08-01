import React from 'react';
import WelcomeScreenForm from '../screenForms/HomeScreenForm';

type WelcomeScreenProps = {navigation: any};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
  return (
    <WelcomeScreenForm
      onSign={() => navigation.navigate('LoginScreen')}
      onRegister={() => navigation.navigate('RegisterScreen')}
    />
  );
};

export default WelcomeScreen;
