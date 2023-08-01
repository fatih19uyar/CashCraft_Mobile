import {View, Text} from 'react-native';
import React, {useState} from 'react';
import BackButton from '../components/BackButton';
import LoginScreenFormFirst from '../screenForms/LoginScreenFormFirst';
import LoginScreenFormSecond from '../screenForms/LoginScreenFormSecond';
import LoginScreenFormThird from '../screenForms/LoginScreenFormThird';
import PressButton from '../components/PressButton';

type LoginScreenProps = {navigation: any};
const LoginScreen: React.FC<LoginScreenProps> = (props: LoginScreenProps) => {
  const [currentForm, setCurrentForm] = useState(1);

  const onLogin = (values: any) => {
    console.log(values);
    // Eğer son formdaysa burada uygun işlemi yapabilirsiniz
  };

  const goBack = () => {
    props.navigation.goBack();
  };

  const goToNextForm = () => {
    setCurrentForm(currentForm + 1);
  };

  // Burada, currentForm değişkenine göre hangi formun render edileceğini belirliyoruz
  const renderForm = () => {
    switch (currentForm) {
      case 1:
        return <LoginScreenFormFirst onLogin={goToNextForm} />;
      case 2:
        return <LoginScreenFormSecond onLogin={goToNextForm} />;
      case 3:
        return <LoginScreenFormThird onLogin={onLogin} />;
      default:
        return <LoginScreenFormFirst onLogin={goToNextForm} />;
    }
  };

  return (
    <>
      <BackButton goBack={goBack} />
      {renderForm()}
    </>
  );
};

export default LoginScreen;
