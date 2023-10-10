import React, {useEffect, useState} from 'react';
import TopBarPage from '../components/TopBarPage';
import Background from '../components/Background';
import BaseProfileScreenForm from '../screenForms/Profile/BaseProfileScreenForm';
import EditUserInfoScreenForm from '../screenForms/Profile/EditUserInfoScreenForm';
import ConfirmationPopup from '../components/ConfirmationPopup';
import {AppDispatch} from '../redux/stores';
import {useDispatch} from 'react-redux';
import {reset} from 'redux-form';
import {PopupMode, UserInfo} from '../types/type';
import ChangePasswordScreenForm from '../screenForms/Profile/ChangePasswordScreenForm';
import UserService from '../services/UserService';
import LoadingScreen, {LoadingContext} from '../components/LoadingScreen';
import {useTranslation} from 'react-i18next';
import i18n from '../i18n/i18n';
import {ToastTypes, showToast} from '../components/ToastMessage';

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
  const [user, setUser] = useState<UserInfo>({
    name: '',
    phoneNumber: '',
    photo: '',
    email: '',
  });
  const {setLoading} = React.useContext(LoadingContext);
  const [isConfirmationPopupVisible, setConfirmationPopupVisible] =
    useState(false);
  const dispatch: AppDispatch = useDispatch();
  const [popupMode, setPopupMode] = useState<PopupMode>('default');
  useEffect(() => {
    setLoading(true);
    const getUserDetails = async () => {
      await UserService.findUser()
        .then(response => {
          setLoading(false);
          setUser(response.data);
        })
        .catch(error => console.log(error));
    };
    getUserDetails();
  }, []);
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

  const editUser = (values: string) => {
    console.log('editUser', values);
    setPopupMode('confirmation');
    setConfirmationPopupVisible(true);
  };
  const changePassword = (values: string) => {
    console.log('ChangePassword', values);
    const {newPass, oldPass, reNewPass}: any = values;
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

  const handleConfirmationCode = (confirmationCode: string) => {
    if (confirmationCode === '123456') {
      dispatch(reset('EditUserScreen'));
      setPopupMode('success');
    } else if (confirmationCode === 'close') {
      setConfirmationPopupVisible(false);
      setCurrentForm('');
    } else {
      console.log('Confirmation hatalı');
    }
  };
  const cancelConfirmationCode = () => {
    setConfirmationPopupVisible(false);
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
