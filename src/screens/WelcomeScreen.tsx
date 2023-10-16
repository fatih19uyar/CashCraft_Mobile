import React, {useContext, useEffect, useState} from 'react';
import WelcomeScreenForm from '../screenForms/WelcomeScreenForm';
import {LoadingContext} from '../components/LoadingScreen';
import Background from '../components/Background';

type WelcomeScreenProps = {
  navigation: {
    goBack: () => void;
    replace: (name: string) => void;
    navigate: (name: string) => void;
  };
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
  const {setLoading} = useContext(LoadingContext);
  setLoading(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Background imageSet={2}>
        <WelcomeScreenForm
          onSign={() => navigation.navigate('LoginScreen')}
          onRegister={() => navigation.navigate('RegisterScreen')}
        />
      </Background>
    </>
  );
};

export default WelcomeScreen;
