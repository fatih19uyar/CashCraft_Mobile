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
import AuthService from '../services/AuthService';

type LoginScreenProps = {navigation: any};
const LoginScreen: React.FC<LoginScreenProps> = (props: LoginScreenProps) => {
  const dispatch: AppDispatch = useDispatch();
  const [currentForm, setCurrentForm] = useState(1);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const onLogin = async (values: LoginUser) => {
    const {email, password, verificationCode} = values;
    if (password && email && verificationCode) {
      setLoading(true);
      await AuthService.verifyPhoneActivationCode(verificationCode, email)
        .then(result => {
          console.log(result.data);
          dispatch(loginSuccess({id: result.data.id, email: email}));
          dispatch(reset('loginScreen'));
          setLoading(false);
        })
        .catch(() => {
          setSnackbarMessage('Hatalı Kod. Lütfen tekrar deneyiniz...');
          setSnackbarVisible(true);
          setLoading(false);
        });
    }
  };

  const goBack = () => {
    dispatch(reset('loginScreen'));
    props.navigation.goBack();
  };
  const goOnSignUp = async (values: any) => {
    console.log('values', values);
    await AuthService.signIn(values)
      .then(result => {
        console.log(result.data);
        setCurrentForm(currentForm + 1);
      })
      .catch(error => {
        console.log(error);
        setSnackbarMessage('Hatalı Kullanıcı Adı veya Parola');
        setSnackbarVisible(true);
      });
  };
  const goToNextForm = (values: any) => {
    setCurrentForm(currentForm + 1);
  };
  const onForgotPassword = () => {
    dispatch(reset('loginScreen'));
    props.navigation.navigate('ForgotPasswordScreen');
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
            goToNextForm={goOnSignUp}
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
