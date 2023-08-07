import React, {useState} from 'react';
import BackButton from '../components/BackButton';
import {Snackbar} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../redux/stores';
import {loginSuccess} from '../redux/slice/authReducer';
import {reset} from 'redux-form';
import LoginScreenFormFirst from '../screenForms/Login/LoginScreenFormFirst';
import LoginScreenFormSecond from '../screenForms/Login/LoginScreenFormSecond';
import LoginScreenFormThird from '../screenForms/Login/LoginScreenFormThird';
import {LoginUser} from '../types/type';
import Background from '../components/Background';
import LoadingScreen from '../components/LoadingScreen';

type LoginScreenProps = {navigation: any};
const LoginScreen: React.FC<LoginScreenProps> = (props: LoginScreenProps) => {
  const dispatch: AppDispatch = useDispatch();
  const [currentForm, setCurrentForm] = useState(1);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const onLogin = (values: LoginUser) => {
    const {email, password, verificationCode} = values;
    setEmail(email);
    if (password && email && verificationCode) {
      setLoading(true);
      setTimeout(() => {
        dispatch(loginSuccess({id: '1', email: email}));
        dispatch(reset('loginScreen'));
      }, 1000);
    } else {
      setSnackbarMessage('Geçersiz email. Lütfen tekrar deneyiniz...');
      setSnackbarVisible(true);
    }
  };

  const goBack = () => {
    dispatch(reset('loginScreen'));
    props.navigation.goBack();
  };
  const goToNextForm = (values: any) => {
    setCurrentForm(currentForm + 1);
  };
  const onForgotPassword = () => {
    dispatch(reset('loginScreen'));
    props.navigation.navigate('ForgotPasswordScreen', email);
  };
  const onReportProblem = () => {
    setSnackbarMessage('Bildirdin tamam');
    setSnackbarVisible(true);
  };
  const onResendCode = () => {
    console.log('Gönderdik');
  };

  const renderForm = () => {
    switch (currentForm) {
      case 1:
        return (
          <LoginScreenFormFirst
            onReportProblem={onReportProblem}
            goToNextForm={goToNextForm}
          />
        );
      case 2:
        return (
          <LoginScreenFormSecond
            goToNextForm={goToNextForm}
            onForgotPassword={onForgotPassword}
          />
        );
      case 3:
        return (
          <LoginScreenFormThird onResendCode={onResendCode} onLogin={onLogin} />
        );
      default:
        return (
          <LoginScreenFormFirst
            onReportProblem={onReportProblem}
            goToNextForm={goToNextForm}
          />
        );
    }
  };

  return (
    <>
      <BackButton goBack={goBack} />
      <Background imageSet={2}>{renderForm()}</Background>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}>
        {snackbarMessage}
      </Snackbar>
      <LoadingScreen visible={loading} />
    </>
  );
};

export default LoginScreen;
