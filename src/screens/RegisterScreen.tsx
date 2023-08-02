import {View, Text} from 'react-native';
import React, {useState} from 'react';
import LoginScreenForm from '../screenForms/Login/LoginScreenFormFirst';
import BackButton from '../components/BackButton';
import RegisterScreenForm from '../screenForms/RegisterScreenForm';
import RegisterScreenFormFirst from '../screenForms/RegisterScreenForm/RegisterScreenFormFirst';
import {Snackbar} from 'react-native-paper';
import RegisterScreenFormSecond from '../screenForms/RegisterScreenForm/RegisterScreenFormSecond';
import RegisterScreenFormThird from '../screenForms/RegisterScreenForm/RegisterScreenFormThird';

type RegisterScreenProps = {navigation: any};
const RegisterScreen: React.FC<RegisterScreenProps> = (
  props: RegisterScreenProps,
) => {
  const [currentForm, setCurrentForm] = useState(1);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const onRegister = (values: any) => {
    console.log(values);
  };
  const goBack = () => {
    props.navigation.goBack();
  };
  const goNext = (values: any) => {
    console.log(values);
    setCurrentForm(currentForm + 1);
  };
  const onReportProblem = () => {
    setSnackbarMessage('Bildirdin tamam');
    setSnackbarVisible(true);
  };
  const renderForm = () => {
    switch (currentForm) {
      case 1:
        return (
          <RegisterScreenFormFirst
            onReportProblem={onReportProblem}
            goNext={goNext}
          />
        );
      case 2:
        return (
          <RegisterScreenFormSecond
            onReportProblem={onReportProblem}
            goNext={goNext}
          />
        );
      case 3:
        return (
          <RegisterScreenFormThird
            onReportProblem={onReportProblem}
            goNext={goNext}
          />
        );
      default:
        return (
          <RegisterScreenFormFirst
            onReportProblem={onReportProblem}
            goNext={goNext}
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

export default RegisterScreen;
