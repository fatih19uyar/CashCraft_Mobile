import React, {useState} from 'react';
import ForgotPasswordScreenFormFirst from '../screenForms/ForgotPassword/ForgotPasswordScreenFormFirst';
import BackButton from '../components/BackButton';
import ForgotPasswordScreenFormSecond from '../screenForms/ForgotPassword/ForgotPasswordScreenFormSecond';

type Props = {navigation: any};

const ForgotPasswordScreen = (props: Props) => {
  const [currentForm, setCurrentForm] = useState(1);

  const goBack = () => {
    props.navigation.goBack();
  };
  const onForgotPass = (values: any) => {
    setCurrentForm(currentForm + 1);
    console.log(values);
  };
  const onGoNewPass = () => {
    props.navigation.navigate('CreateAccountScreen');
  };
  const renderForm = () => {
    switch (currentForm) {
      case 1:
        return <ForgotPasswordScreenFormFirst onForgotPass={onForgotPass} />;
      case 2:
        return <ForgotPasswordScreenFormSecond onGoNewPass={onGoNewPass} />;
      default:
        return <ForgotPasswordScreenFormFirst onForgotPass={onForgotPass} />;
    }
  };
  return (
    <>
      <BackButton goBack={goBack} />
      {renderForm()}
    </>
  );
};

export default ForgotPasswordScreen;
