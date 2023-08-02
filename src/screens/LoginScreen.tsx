import {View, Text} from 'react-native';
import React, {useState} from 'react';
import BackButton from '../components/BackButton';
import LoginScreenFormFirst from '../screenForms/LoginScreenFormFirst';
import LoginScreenFormSecond from '../screenForms/LoginScreenFormSecond';
import LoginScreenFormThird from '../screenForms/LoginScreenFormThird';
import PressButton from '../components/PressButton';
import {Snackbar} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../redux/stores';
import {loginSuccess} from '../redux/slice/authReducer';

type LoginScreenProps = {navigation: any};
const LoginScreen: React.FC<LoginScreenProps> = (props: LoginScreenProps) => {
  const dispatch: AppDispatch = useDispatch();
  const [currentForm, setCurrentForm] = useState(1);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const onLogin = (values: any) => {
    console.log(values);
    props.navigation.navigate('HomeScreen');
  };

  const goBack = () => {
    props.navigation.goBack();
  };

  const goToNextForm = (values: any) => {
    const {email_login, password} = values;
    if (email_login === 'fatih@gmail.com' && password == null)
      setCurrentForm(currentForm + 1);
    else if (password && email_login) {
      dispatch(loginSuccess({id: '1', email: email_login}));
    } else {
      setSnackbarMessage('Geçersiz email. Lütfen tekrar deneyiniz...');
      setSnackbarVisible(true);
    }
  };
  const onForgotPassword = () => {
    setSnackbarMessage('Haha şifreni mi unuttun :D');
    setSnackbarVisible(true);
  };
  const onReportProblem = () => {};

  // Burada, currentForm değişkenine göre hangi formun render edileceğini belirliyoruz
  const renderForm = () => {
    switch (currentForm) {
      case 1:
        return (
          <LoginScreenFormFirst
            onReportProblem={onReportProblem}
            onLogin={goToNextForm}
          />
        );
      case 2:
        return (
          <LoginScreenFormSecond
            onLogin={goToNextForm}
            onForgotPassword={onForgotPassword}
          />
        );
      case 3:
        return <LoginScreenFormThird onLogin={onLogin} />;
      default:
        return (
          <LoginScreenFormFirst
            onReportProblem={onReportProblem}
            onLogin={goToNextForm}
          />
        );
    }
  };

  return (
    <>
      <BackButton goBack={goBack} />
      {renderForm()}
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}>
        {snackbarMessage}
      </Snackbar>
    </>
  );
};

export default LoginScreen;
