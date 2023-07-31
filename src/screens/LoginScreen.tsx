import {View, Text} from 'react-native';
import React from 'react';
import LoginScreenForm from '../screenForms/LoginScreenForm';
import BackButton from '../components/BackButton';

type LoginScreenProps = {navigation: any};
const LoginScreen: React.FC<LoginScreenProps> = (props: LoginScreenProps) => {
  const onLogin = (values: any) => {
    console.log(values);
  };
  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <>
      <BackButton goBack={goBack} />
      <LoginScreenForm onLogin={onLogin} />
    </>
  );
};

export default LoginScreen;
