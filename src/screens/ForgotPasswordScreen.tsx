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
import {useTranslation} from 'react-i18next';
import {ToastTypes, showToast} from '../components/ToastMessage';

type Props = {navigation: any; route: any};

const ForgotPasswordScreen = (props: Props) => {
  const [currentForm, setCurrentForm] = useState(1);
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const [isPopupVisible, setPopupVisible] = useState(false);
  const {t} = useTranslation();
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
        const toastConfig = {
          type: 'fault' as ToastTypes,
          text1: t('PasswordCouldNotSent'),
        };
        showToast(toastConfig);
      });
  };
  const onCheckCode = async (values: any) => {
    setVerificationCode(values.verificationCode);
    await AuthService.verifyResetCode(values.verificationCode, email)
      .then(() => {
        setCurrentForm(currentForm + 1);
      })
      .catch(error => {
        console.log(error);
        const toastConfig = {
          type: 'fault' as ToastTypes,
          text1: t('BadCode'),
        };
        showToast(toastConfig);
      });
  };
  const goNext = () => {
    setCurrentForm(currentForm + 1);
  };
  const onSendReport = () => {
    const toastConfig = {
      type: 'info' as ToastTypes,
      text1: 'Sorun iletildi.',
      text2: 'Teşekkürler.',
    };
    showToast(toastConfig);
  };

  const onGoNewPass = async (values: any) => {
    const {createPassword, reCreatePassword} = values;
    if (createPassword === reCreatePassword) {
      try {
        await AuthService.resetPassword(
          email,
          verificationCode,
          createPassword,
        );
        setPopupVisible(true);
        dispatch(reset('forgotPasswordScreen'));
        setTimeout(() => {
          props.navigation.navigate('WelcomeScreen');
        }, 3000);
      } catch (error) {
        console.error('Reset Password Error:', error);
        const toastConfig = {
          type: 'fault' as ToastTypes,
          text1: t('BadCode'),
        };
        showToast(toastConfig);
      }
    } else {
      const toastConfig = {
        type: 'fault' as ToastTypes,
        text1: t('PasswordsDontMatch'),
      };
      showToast(toastConfig);
    }
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
            onSendReport={onSendReport}
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
        onConfirm={() => {
          setPopupVisible(false);
          props.navigation.navigate('WelcomeScreen');
        }}
        mode={'changedPassword'}
      />
    </>
  );
};

export default ForgotPasswordScreen;
