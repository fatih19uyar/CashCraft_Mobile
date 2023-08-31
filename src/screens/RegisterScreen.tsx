import {View, Text} from 'react-native';
import React, {useState} from 'react';
import LoginScreenForm from '../screenForms/Login/LoginScreenFormFirst';
import BackButton from '../components/BackButton';
import RegisterScreenForm from '../screenForms/RegisterScreenForm';
import RegisterScreenFormFirst from '../screenForms/RegisterScreenForm/RegisterScreenFormFirst';
import {Snackbar} from 'react-native-paper';
import RegisterScreenFormSecond from '../screenForms/RegisterScreenForm/RegisterScreenFormSecond';
import RegisterScreenFormThird from '../screenForms/RegisterScreenForm/RegisterScreenFormThird';
import {AppDispatch} from '../redux/stores';
import {useDispatch} from 'react-redux';
import {reset} from 'redux-form';
import CreatePasswordScreenFirst from '../screenForms/CreatePassword/CreatePasswordScreenFirst';
import CreatePasswordScreenSecond from '../screenForms/CreatePassword/CreatePasswordScreenSecond';
import Background from '../components/Background';
import {NewUser} from '../types/type';
import ConfirmationPopup from '../components/ConfirmationPopup';

type RegisterScreenProps = {navigation: any};
const RegisterScreen: React.FC<RegisterScreenProps> = (
  props: RegisterScreenProps,
) => {
  const [currentForm, setCurrentForm] = useState(1);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [newUser, setNewUser] = useState<NewUser>({
    email: '',
    emailVerificationCode: 0,
    userName: '',
    userSurName: '',
    userPhoneNumber: '',
    userPassword: 0,
  });
  const goBack = () => {
    dispatch(reset('RegisterScreen'));
    dispatch(reset('createPassword'));
    props.navigation.goBack();
  };
  const goScreen = (values: any) => {
    const {createPassword, reCreatePassword} = values;
    if (createPassword === reCreatePassword) {
      setNewUser(prevUser => ({
        ...prevUser,
        userPassword: createPassword,
      }));
      setPopupVisible(true);
      setTimeout(() => {
        dispatch(reset('createPassword'));
        dispatch(reset('RegisterScreen'));
        props.navigation.navigate('WelcomeScreen');
      }, 2000);
    } else if (createPassword && !reCreatePassword) {
      setCurrentForm(currentForm + 1);
    } else {
      setSnackbarMessage('Şifreler Uyuşmuyor');
      setSnackbarVisible(true);
    }
    console.log(values);
  };
  const goNext = (values: any) => {
    let {
      campAgreement,
      userAgreement,
      email_create,
      verificationCode,
      userSurname,
      userName,
      phoneNumber,
    } = values;
    if (verificationCode) {
      console.log('Email Check Code', verificationCode);
    }
    if (campAgreement && userAgreement) {
      setNewUser(prevUser => ({
        ...prevUser,
        email: email_create,
        emailVerificationCode: verificationCode,
        userName: userName,
        userSurName: userSurname,
        userPhoneNumber: phoneNumber,
      }));
      setCurrentForm(currentForm + 1);
    } else if (
      userAgreement !== undefined &&
      !userAgreement &&
      userName !== undefined
    ) {
      setSnackbarMessage('Lütfen Kullanıcı Sözleşmesini Kabul Edin');
      setSnackbarVisible(true);
      console.log(values);
      return;
    }
    setCurrentForm(currentForm + 1);
    console.log(values);
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
      case 4:
        return <CreatePasswordScreenFirst goToNextForm={goScreen} />;
      case 5:
        return <CreatePasswordScreenSecond goScreen={goScreen} />;
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
      <Background imageSet={2}>{renderForm()}</Background>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}>
        {snackbarMessage}
      </Snackbar>
      <ConfirmationPopup
        isVisible={isPopupVisible}
        onCancel={() => {}}
        onConfirm={() => {}}
        onResent={() => console.log('Gönderdik')}
        mode={'createdAccount'}
      />
    </>
  );
};

export default RegisterScreen;
