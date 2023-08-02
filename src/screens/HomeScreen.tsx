import React from 'react';
import HomeScreenForm from '../screenForms/HomeScreenForm';
import LogOutButton from '../components/LogOutButton';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <>
      <LogOutButton />
      <HomeScreenForm />
    </>
  );
};

export default HomeScreen;
