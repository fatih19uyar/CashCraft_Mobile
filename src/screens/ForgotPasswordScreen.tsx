import React, {useState} from 'react';
import ForgotPasswordScreenFormFirst from '../screenForms/ForgotPassword/ForgotPasswordScreenFormFirst';
import BackButton from '../components/BackButton';
import ForgotPasswordScreenFormSecond from '../screenForms/ForgotPassword/ForgotPasswordScreenFormSecond';
import CreatePasswordScreenFirst from '../screenForms/CreatePassword/CreatePasswordScreenFirst';
import CreatePasswordScreenSecond from '../screenForms/CreatePassword/CreatePasswordScreenSecond';
import {reset} from 'redux-form';
import {AppDispatch} from '../redux/stores';
import {useDispatch} from 'react-redux';

type Props = {navigation: any; route: any};

const ForgotPasswordScreen = (props: Props) => {
  const [currentForm, setCurrentForm] = useState(1);
  const [email, setEmail] = useState('');
  const dispatch: AppDispatch = useDispatch();

  const goBack = () => {
    props.navigation.goBack();
  };
  const goToNextForm = (values: any) => {
    setCurrentForm(currentForm + 1);
    console.log(values);
    setEmail(values.email_forgot);
  };
  const onGoNewPass = (values: any) => {
    console.log(values);
    dispatch(reset('forgotPasswordScreen'));
    props.navigation.navigate('WelcomeScreen');
  };
  const renderForm = () => {
    switch (currentForm) {
      case 1:
        return <ForgotPasswordScreenFormFirst onForgotPass={goToNextForm} />;
      case 2:
        return (
          <ForgotPasswordScreenFormSecond
            email={email}
            onGoNewPass={goToNextForm}
          />
        );
      case 3:
        return <CreatePasswordScreenFirst goToNextForm={goToNextForm} />;
      case 4:
        return <CreatePasswordScreenSecond goScreen={onGoNewPass} />;
      default:
        return <ForgotPasswordScreenFormFirst onForgotPass={goToNextForm} />;
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
