import React, {useState} from 'react';
import TopBarPage from '../components/TopBarPage';
import Background from '../components/Background';
import BaseProfileScreenForm from '../screenForms/Profile/BaseProfileScreenForm';
import EditUserInfoScreenForm from '../screenForms/Profile/EditUserInfoScreenForm';
import ConfirmationPopup from '../components/ConfirmationPopup'; // ConfirmationPopup bileşenini dahil edin
import {AppDispatch} from '../redux/stores';
import {useDispatch} from 'react-redux';
import {reset} from 'redux-form';
import {Snackbar} from 'react-native-paper';
import {PopupMode} from '../types/type';

type Props = {navigation: any};

const ProfileScreen = (props: Props) => {
  const [currentForm, setCurrentForm] = useState('');
  const [isConfirmationPopupVisible, setConfirmationPopupVisible] =
    useState(false);
  const dispatch: AppDispatch = useDispatch();
  const [popupMode, setPopupMode] = useState<PopupMode>('default');

  const goBack = () => {
    dispatch(reset('EditUserScreen'));
    props.navigation.goBack();
  };

  const onPress = (values: string) => {
    setCurrentForm(values);
  };

  const editUser = (values: string) => {
    console.log('editUser', values);
    setPopupMode('confirmation');
    setConfirmationPopupVisible(true);
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
        return <EditUserInfoScreenForm onPress={editUser} />;
      default:
        return <BaseProfileScreenForm onPress={onPress} />;
    }
  };

  return (
    <>
      <Background imageSet={1}>
        <TopBarPage
          onGoBack={goBack}
          onTobBarItem={{
            bigText: 'Profilim',
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
    </>
  );
};

export default ProfileScreen;
