import React, {useState} from 'react';
import BackButton from '../components/BackButton';
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
import AuthService from '../services/AuthService';

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
  const goScreen = async (values: any) => {
    const {createPassword, reCreatePassword} = values;
    if (createPassword === reCreatePassword) {
      setNewUser(prevUser => ({
        ...prevUser,
        userPassword: createPassword,
      }));
      setPopupVisible(true);
      console.log(newUser);
      await AuthService.signUp({
        name: newUser.userName + ' ' + newUser.userSurName,
        phoneNumber: newUser.userPhoneNumber,
        photo: 'userd.jpg',
        email: newUser.email,
        password: createPassword,
      })
        .then(response => {
          console.log('Register Success');
        })
        .catch(error => {
          console.error(error.message);
        });
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
  };
  const onGoEmailVerification = async (values: any) => {
    try {
      await AuthService.checkEmailExists(values.email_create);
      await AuthService.sendVerificationCodeByEmail(values.email_create).then(
        () => {
          setNewUser({...newUser, email: values.email_create});
          setCurrentForm(currentForm + 1);
        },
      );
    } catch (error) {
      setSnackbarMessage('Bu Email Kullanılıyor.');
      setSnackbarVisible(true);
    }
  };
  const onCheckEmailVerification = async (values: any) => {
    console.log(values);
    await AuthService.verifyEmailActivationCode(
      values.email_create,
      values.verificationCode,
    )
      .then(() => {
        setCurrentForm(currentForm + 1);
      })
      .catch(error => {
        const {status} = error.response || {};
        const errorMessage =
          status === 401
            ? 'Hatalı Doğrulama Kodu'
            : 'Bir hata oluştu. Lütfen tekrar deneyin.';
        setSnackbarMessage(errorMessage);
        setSnackbarVisible(true);
      });
  };
  const goNext = (values: any) => {
    if (values.campAgreement && values.userAgreement) {
      setNewUser(prevUser => ({
        ...prevUser,
        email: values.email_create,
        emailVerificationCode: values.verificationCode,
        userName: values.userName,
        userSurName: values.userSurname,
        userPhoneNumber: values.phoneNumber,
      }));
      setCurrentForm(currentForm + 1);
    } else if (
      values.userAgreement !== undefined &&
      !values.userAgreement &&
      values.userName !== undefined
    ) {
      setSnackbarMessage('Lütfen Kullanıcı Sözleşmesini Kabul Edin');
      setSnackbarVisible(true);
      console.log(values);
      return;
    }
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
            goNext={onGoEmailVerification}
          />
        );
      case 2:
        return (
          <RegisterScreenFormSecond
            onReportProblem={onReportProblem}
            goNext={onCheckEmailVerification}
            email={newUser.email}
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
