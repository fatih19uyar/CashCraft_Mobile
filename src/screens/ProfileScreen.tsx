import React, {useEffect, useState} from 'react';
import TopBarPage from '../components/TopBarPage';
import Background from '../components/Background';
import BaseProfileScreenForm from '../screenForms/Profile/BaseProfileScreenForm';
import EditUserInfoScreenForm from '../screenForms/Profile/EditUserInfoScreenForm';
import ConfirmationPopup from '../components/ConfirmationPopup';
import {getFormValues, reset} from 'redux-form';
import {PopupMode, UserUpdate} from '../types/type';
import ChangePasswordScreenForm from '../screenForms/Profile/ChangePasswordScreenForm';
import {useTranslation} from 'react-i18next';
import i18n from '../i18n/i18n';
import {ToastTypes, showToast} from '../components/ToastMessage';
import useUser from '../hooks/useUser';
import UserService from '../services/UserService';
import {loadingSet} from '../redux/slice/navigationSlice';
import {useAppDispatch, useAppSelector} from '../hooks/useStore';
import AuthService from '../services/AuthService';

type Props = {
  navigation: {
    goBack: () => void;
    replace: (name: string) => void;
    navigate: (name: string) => void;
  };
};

const ProfileScreen = (props: Props) => {
  const {t} = useTranslation();
  const [currentForm, setCurrentForm] = useState('');
  const {user, handleRefreshUser} = useUser();
  const [isConfirmationPopupVisible, setConfirmationPopupVisible] =
    useState(false);
  const dispatch = useAppDispatch();
  const [popupMode, setPopupMode] = useState<PopupMode>('default');
  const [editUserData, setEditUserData] = useState<UserUpdate>();
  const userId: string | null = useAppSelector(
    state => state.authReducer.userId,
  );
  const goBack = () => {
    dispatch(reset('EditUserScreen'));
    dispatch(reset('ChangePasswordScreen'));
    props.navigation.goBack();
  };

  const onPress = (values: string) => {
    values == 'DeleteWallet'
      ? props.navigation.navigate('DeleteWalletScreen')
      : setCurrentForm(values);
  };

  useEffect(() => {
    dispatch(loadingSet({loading: !Boolean(user)}));
  }, [user]);

  const editUser = async (values: UserUpdate) => {
    setEditUserData({phoneNumber: values.phoneNumber, email: values.email});
    dispatch(loadingSet({loading: true}));
    AuthService.confirmationCode(userId ? userId : '')
      .then(() => {
        setPopupMode('confirmation');
        setConfirmationPopupVisible(true);
        dispatch(loadingSet({loading: false}));
      })
      .catch(() => {
        dispatch(reset('EditUserScreen'));
        dispatch(loadingSet({loading: false}));
        const toastConfig = {
          type: 'fault' as ToastTypes,
          text1: t('ConformationCodeCreateError'),
        };
        showToast(toastConfig);
      });
  };
  const changePassword = (values: string) => {
    console.log('ChangePassword', values);
    const {newPass, oldPass, reNewPass}: any = values;
    console.log(oldPass);
    if (newPass == reNewPass) {
      setPopupMode('success');
      setConfirmationPopupVisible(true);
      setTimeout(() => {
        dispatch(reset('ChangePasswordScreen'));
        setConfirmationPopupVisible(false);
        setCurrentForm('');
      }, 3000);
    } else {
      const toastConfig = {
        type: 'fault' as ToastTypes,
        text1: t('PasswordsDontMatch'),
      };
      showToast(toastConfig);
    }
  };
  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'tr' : 'en'; // Dil geçişi yap
    i18n.changeLanguage(newLanguage); // Dil değiştir
  };

  const handleConfirmationCode = async (confirmationCode: string) => {
    try {
      dispatch(loadingSet({loading: true}));
      if (confirmationCode === 'close') {
        setConfirmationPopupVisible(false);
        setCurrentForm('');
        dispatch(loadingSet({loading: false}));
        return;
      }
      AuthService.verifyConfirmationCode(
        userId ? userId : '',
        confirmationCode,
      ).then(() => {
        if (editUserData)
          UserService.updateUser(editUserData).then(() => {
            setPopupMode('success');
            dispatch(reset('EditUserScreen'));
            handleRefreshUser();
            dispatch(loadingSet({loading: false}));
          });
      });
    } catch (error) {
      console.log(error);
      const toastConfig = {
        type: 'fault' as ToastTypes,
        text1: t('ConformationCodeFault'),
      };
      showToast(toastConfig);
    }
  };
  const cancelConfirmationCode = () => {
    setConfirmationPopupVisible(false);
    dispatch(reset('EditUserScreen'));
    setCurrentForm('');
  };

  const renderForm = () => {
    switch (currentForm) {
      case 'EditUser':
        return <EditUserInfoScreenForm onPress={editUser} user={user} />;
      case 'ChangePassword':
        return <ChangePasswordScreenForm onPress={changePassword} />;
      default:
        return (
          <BaseProfileScreenForm
            toggleLanguage={toggleLanguage}
            onPress={onPress}
            user={user}
          />
        );
    }
  };

  return (
    <>
      <Background imageSet={1}>
        <TopBarPage
          onGoBack={goBack}
          onTobBarItem={{
            bigText: t('MyProfile'),
          }}
        />
        {renderForm()}
      </Background>
      <ConfirmationPopup
        isVisible={isConfirmationPopupVisible}
        onCancel={cancelConfirmationCode}
        onConfirm={handleConfirmationCode}
        onResent={() => console.log('Gönderdik')}
        mode={popupMode}
      />
    </>
  );
};

export default ProfileScreen;
