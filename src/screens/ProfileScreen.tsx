import React, {useEffect, useState} from 'react';
import TopBarPage from '../components/TopBarPage';
import Background from '../components/Background';
import BaseProfileScreenForm from '../screenForms/Profile/BaseProfileScreenForm';
import EditUserInfoScreenForm from '../screenForms/Profile/EditUserInfoScreenForm';
import ConfirmationPopup from '../components/ConfirmationPopup'; // ConfirmationPopup bileşenini dahil edin
import {AppDispatch} from '../redux/stores';
import {useDispatch} from 'react-redux';
import {reset} from 'redux-form';
import {PopupMode, UserInfo} from '../types/type';
import ChangePasswordScreenForm from '../screenForms/Profile/ChangePasswordScreenForm';
import {Snackbar} from 'react-native-paper';
import UserService from '../services/UserService';
import LoadingScreen from '../components/LoadingScreen';
import {useTranslation} from 'react-i18next';

type Props = {navigation: any};

const ProfileScreen = (props: Props) => {
  const {t} = useTranslation();
  const [currentForm, setCurrentForm] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [user, setUser] = useState<UserInfo>({
    name: '',
    phoneNumber: '',
    photo: '',
    email: '',
  });
  const [loading, setLoading] = useState(true);
  const [isConfirmationPopupVisible, setConfirmationPopupVisible] =
    useState(false);
  const dispatch: AppDispatch = useDispatch();
  const [popupMode, setPopupMode] = useState<PopupMode>('default');
  useEffect(() => {
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
      }, 2000);
    } else {
      setSnackbarMessage(t('PasswordsDontMatch'));
      setSnackbarVisible(true);
    }
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
        return <BaseProfileScreenForm onPress={onPress} user={user} />;
    }
  };

  return (
    <>
      <Background imageSet={1}>
        <TopBarPage
          onGoBack={goBack}
          onTobBarItem={{
            bigText: t('MyProfile'),
            smallText: '',
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

export default ProfileScreen;
