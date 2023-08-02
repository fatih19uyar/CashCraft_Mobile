import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import HomeScreenForm from '../screenForms/HomeScreenForm';
import LogOutButton from '../components/LogOutButton';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <>
      <LogOutButton />
      <HomeScreenForm
        onSign={function (): void {
          throw new Error('Function not implemented.');
        }}
        onRegister={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </>
  );
};

export default HomeScreen;
