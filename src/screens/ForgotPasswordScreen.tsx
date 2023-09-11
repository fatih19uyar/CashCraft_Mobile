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
import AuthService from '../services/AuthService';
import {Snackbar} from 'react-native-paper';

type Props = {navigation: any; route: any};

const ForgotPasswordScreen = (props: Props) => {
  const [currentForm, setCurrentForm] = useState(1);
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const [isPopupVisible, setPopupVisible] = useState(false);

  const goBack = () => {
    props.navigation.navigate('WelcomeScreen');
  };
  const goToNextForm = async (values: any) => {
    await AuthService.forgotPassword(values.email_forgot)
      .then(() => {
        setCurrentForm(currentForm + 1);
        setEmail(values.email_forgot);
      })
      .catch(error => {
        console.log('error', error);
        setSnackbarMessage('Şifre gönderilemedi');
        setSnackbarVisible(true);
      });
  };
  const onCheckCode = async (values: any) => {
    setVerificationCode(values.verificationCode);
    await AuthService.verifyResetCode(verificationCode, email)
      .then(() => {
        setCurrentForm(currentForm + 1);
      })
      .catch(error => {
        setSnackbarMessage('Hatalı kod');
        setSnackbarVisible(true);
      });
  };
  const goNext = () => {
    setCurrentForm(currentForm + 1);
  };
  const onGoNewPass = async (values: any) => {
    const {createPassword, reCreatePassword} = values;
    createPassword === reCreatePassword
      ? await AuthService.resetPassword(email, verificationCode, createPassword)
          .then(() => {
            setPopupVisible(true);
            dispatch(reset('forgotPasswordScreen'));
            setTimeout(() => {
              props.navigation.navigate('WelcomeScreen');
            }, 3000);
          })
          .catch(error => console.log('forgot pass ', error))
      : (setSnackbarMessage('Şifreler Uyuşmuyor'), setSnackbarVisible(true));
  };
  const renderForm = () => {
    switch (currentForm) {
      case 1:
        return <ForgotPasswordScreenFormFirst onForgotPass={goToNextForm} />;
      case 2:
        return (
          <ForgotPasswordScreenFormSecond
            email={email}
            onGoNewPass={onCheckCode}
          />
        );
      case 3:
        return <CreatePasswordScreenFirst goToNextForm={goNext} />;
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
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}>
        {snackbarMessage}
      </Snackbar>
    </>
  );
};

export default ForgotPasswordScreen;
