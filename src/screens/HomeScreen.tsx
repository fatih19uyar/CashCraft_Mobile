import React from 'react';
import HomeScreenForm from '../screenForms/HomeScreenForm';

type HomeScreenProps = {navigation: any};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <HomeScreenForm
      onSign={() => navigation.navigate('LoginScreen')}
      onRegister={() => navigation.navigate('RegisterScreen')}
    />
  );
};

export default HomeScreen;
