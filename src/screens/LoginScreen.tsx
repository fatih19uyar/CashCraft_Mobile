import React, {useState} from 'react';
import BackButton from '../components/BackButton';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../redux/stores';
import {loginSuccess} from '../redux/slice/authSlice';
import {reset} from 'redux-form';
import LoginScreenFormFirst from '../screenForms/Login/LoginScreenFormFirst';
import LoginScreenFormSecond from '../screenForms/Login/LoginScreenFormSecond';
import LoginScreenFormThird from '../screenForms/Login/LoginScreenFormThird';
import {Login, LoginUser} from '../types/type';
import Background from '../components/Background';
import {LoadingContext} from '../components/LoadingScreen';
import AuthService from '../services/AuthService';
import {change} from 'redux-form';
import {ToastTypes, showToast} from '../components/ToastMessage';
import {useTranslation} from 'react-i18next';

type LoginScreenProps = {
  navigation: {
    goBack: () => void;
    replace: (name: string) => void;
    navigate: (name: string) => void;
  };
};
type LoginData = {
  email: string;
  password: string;
};
const LoginScreen: React.FC<LoginScreenProps> = (props: LoginScreenProps) => {
  const {t} = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const [currentForm, setCurrentForm] = useState(1);
  const [passwordClear, setPasswordClear] = useState(false);
  const {setLoading} = React.useContext(LoadingContext);
  const [token, setToken] = useState('');
  const onLogin = async (values: LoginUser) => {
    const {email, password, verificationCode} = values;
    if (password && email && verificationCode) {
      setLoading(true);
      await AuthService.verifyPhoneActivationCode(verificationCode, email)
        .then(async () => {
          dispatch(loginSuccess({token: token}));
          props.navigation.navigate('HomeScreen');
          dispatch(reset('loginScreen'));
          setLoading(false);
        })
        .catch(() => {
          const toastConfig = {
            type: 'fault' as ToastTypes,
            text1: 'Hatalı Kod. Lütfen tekrar deneyiniz...',
          };
          showToast(toastConfig);
          setLoading(false);
        });
    }
  };

  const goBack = () => {
    dispatch(reset('loginScreen'));
    props.navigation.goBack();
  };
  const goOnSignUp = async (values: LoginData) => {
    await AuthService.signIn(values)
      .then(result => {
        setToken(result.data.token);
        setCurrentForm(currentForm + 1);
      })
      .catch(error => {
        console.log(error);
        setPasswordClear(true);
        const toastConfig = {
          type: 'fault' as ToastTypes,
          text1: 'Hatalı Kullanıcı Adı veya Parola',
          text2: 'Lütfen tekrar deneyiniz',
        };
        showToast(toastConfig);
        setPasswordClear(false);
        dispatch(change('loginScreen', 'password', ''));
        console.log(error.message);
      });
  };
  const goToNextForm = () => {
    setCurrentForm(currentForm + 1);
  };
  const onForgotPassword = () => {
    dispatch(reset('loginScreen'));
    props.navigation.navigate('ForgotPasswordScreen');
  };
  const onReportProblem = () => {
    const toastConfig = {
      type: 'success' as ToastTypes,
      text1: t('ProblemReported'),
      text2: t('Thanks'),
    };
    showToast(toastConfig);
  };
  const onResendCode = async (values: LoginData) => {
    await AuthService.signIn(values)
      .then(() => {
        const toastConfig = {
          type: 'info' as ToastTypes,
          text1: t('CodeSentAgain'),
        };
        showToast(toastConfig);
      })
      .catch(error => {
        console.log('ResentPhone Code', error);
      });
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
            passWordClear={passwordClear}
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
    </>
  );
};

export default LoginScreen;
