import {View, Text} from 'react-native';
import React from 'react';
import LoginScreenForm from '../screenForms/LoginScreenForm';
import BackButton from '../components/BackButton';
import RegisterScreenForm from '../screenForms/RegisterScreenForm';

type RegisterScreenProps = {navigation: any};
const RegisterScreen: React.FC<RegisterScreenProps> = (
  props: RegisterScreenProps,
) => {
  const onRegister = (values: any) => {
    console.log(values);
  };
  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <>
      <BackButton goBack={goBack} />
      <RegisterScreenForm onRegister={onRegister} />
    </>
  );
};

export default RegisterScreen;
