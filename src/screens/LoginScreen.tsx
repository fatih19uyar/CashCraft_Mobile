import {View, Text} from 'react-native';
import React from 'react';
import LoginScreenForm from '../screenForms/LoginScreenForm';

type Props = {};

const LoginScreen = (props: Props) => {
  const onSubnmit = () => {};
  return (
    <View>
      <LoginScreenForm
        onRegister={onSubnmit}
        onForgotPassword={onSubnmit}
        onSubmit={onSubnmit}
      />
    </View>
  );
};

export default LoginScreen;
