import React, {useContext, useState} from 'react';
import BackButton from '../components/BackButton';
import RegisterScreenFormFirst from '../screenForms/RegisterScreenForm/RegisterScreenFormFirst';
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
import {ToastTypes, showToast} from '../components/ToastMessage';
import {useTranslation} from 'react-i18next';
import {LoadingContext} from '../components/LoadingScreen';

type RegisterScreenProps = {
  navigation: {
    goBack: () => void;
    replace: (name: string) => void;
    navigate: (name: string) => void;
  };
};
const RegisterScreen: React.FC<RegisterScreenProps> = (
  props: RegisterScreenProps,
) => {
  const {t} = useTranslation();
  const [currentForm, setCurrentForm] = useState(1);
  const {setLoading} = useContext(LoadingContext);
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
        .then(() => {
          setTimeout(() => {
            dispatch(reset('createPassword'));
            dispatch(reset('RegisterScreen'));
            props.navigation.navigate('WelcomeScreen');
          }, 2000);
        })
        .catch(error => {
          const toastConfig = {
            type: 'fault' as ToastTypes,
            text1: t('AccountCreationError'),
            text2: error.message,
          };
          showToast(toastConfig);
        });
    } else if (createPassword && !reCreatePassword) {
      setCurrentForm(currentForm + 1);
    } else {
      const toastConfig = {
        type: 'fault' as ToastTypes,
        text1: t('PasswordsDontMatch'),
      };
      showToast(toastConfig);
    }
  };
  const onGoEmailVerification = async (values: any) => {
    try {
      setLoading(true);
      await AuthService.checkEmailExists(values.email_create);
      await AuthService.sendVerificationCodeByEmail(values.email_create).then(
        () => {
          setNewUser({...newUser, email: values.email_create});
          setCurrentForm(currentForm + 1);
          setLoading(false);
        },
      );
    } catch (error) {
      const toastConfig = {
        type: 'fault' as ToastTypes,
        text1: t('EmailAlreadyExists'),
      };
      showToast(toastConfig);
    }
  };
  const onCheckEmailVerification = async (values: any) => {
    console.log(values);
    setLoading(true);
    await AuthService.verifyEmailActivationCode(
      values.email_create,
      values.verificationCode,
    )
      .then(() => {
        setLoading(false);
        setCurrentForm(currentForm + 1);
      })
      .catch(error => {
        const {status} = error.response || {};
        const errorMessage =
          status === 401 ? t('BadCode') : t('SomethingWentWrong');

        const toastConfig = {
          type: 'fault' as ToastTypes,
          text1: errorMessage,
        };
        showToast(toastConfig);
        setLoading(false);
      });
  };
  const goNext = async (values: any) => {
    if (values.campAgreement && values.userAgreement) {
      setLoading(true);
      await AuthService.checkPhoneNumberExists(values.phoneNumber)
        .then(() => {
          setNewUser(prevUser => ({
            ...prevUser,
            email: values.email_create,
            emailVerificationCode: values.verificationCode,
            userName: values.userName,
            userSurName: values.userSurname,
            userPhoneNumber: values.phoneNumber,
          }));
          setCurrentForm(currentForm + 1);
          setLoading(false);
        })
        .catch(() => {
          const toastConfig = {
            type: 'fault' as ToastTypes,
            text1: t('PhoneAlreadyExists'),
          };
          showToast(toastConfig);
          setLoading(false);
        });
    } else if (
      values.userAgreement !== undefined &&
      !values.userAgreement &&
      values.userName !== undefined
    ) {
      const toastConfig = {
        type: 'info' as ToastTypes,
        text1: t('AcceptUserAgreement'),
      };
      showToast(toastConfig);
      console.log(values);
      return;
    }
    console.log(values);
  };
  const onReportProblem = () => {
    const toastConfig = {
      type: 'info' as ToastTypes,
      text1: t('ProblemReported'),
      text2: t('Thanks'),
    };
    showToast(toastConfig);
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
