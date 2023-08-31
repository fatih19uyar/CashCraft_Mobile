import React, {useState} from 'react';
import ForgotPasswordScreenFormFirst from '../screenForms/ForgotPassword/ForgotPasswordScreenFormFirst';
import BackButton from '../components/BackButton';
import ForgotPasswordScreenFormSecond from '../screenForms/ForgotPassword/ForgotPasswordScreenFormSecond';
import CreatePasswordScreenFirst from '../screenForms/CreatePassword/CreatePasswordScreenFirst';
import CreatePasswordScreenSecond from '../screenForms/CreatePassword/CreatePasswordScreenSecond';
import {reset} from 'redux-form';
import {AppDispatch} from '../redux/stores';
import {useDispatch} from 'react-redux';
import Background from '../components/Background';
import ConfirmationPopup from '../components/ConfirmationPopup';

type Props = {navigation: any; route: any};

const ForgotPasswordScreen = (props: Props) => {
  const [currentForm, setCurrentForm] = useState(1);
  const [email, setEmail] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const [isPopupVisible, setPopupVisible] = useState(false);

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
    setPopupVisible(true);
    dispatch(reset('forgotPasswordScreen'));
    setTimeout(() => {
      props.navigation.navigate('WelcomeScreen');
    }, 3000);
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
      <Background imageSet={2}>{renderForm()}</Background>
      <ConfirmationPopup
        isVisible={isPopupVisible}
        onCancel={() => {}}
        onConfirm={() => {
          setPopupVisible(false);
          props.navigation.navigate('WelcomeScreen');
        }}
        onResent={() => console.log('Gönderdik')}
        mode={'changedPassword'}
      />
    </>
  );
};

export default ForgotPasswordScreen;
