import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Modal, TouchableWithoutFeedback} from 'react-native';
import PressButton from './PressButton';
import TextView from './TextView';
import themes from '../utils/themes';
import {useTranslation} from 'react-i18next';

const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(128, 128, 128, 0.5);
`;

const ModalView = styled.View`
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  shadow-offset: 0px 2px;
  shadow-radius: 4px;
`;

interface ProfileMenuProps {
  onVisible: boolean;
  onCloseModal: () => void;
  onPressButton: (buttonType: string) => void;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({
  onVisible,
  onCloseModal,
  onPressButton,
}) => {
  const [isLogOut, setLogOut] = useState(false);
  const {t} = useTranslation();
  if (!onVisible) {
    return null;
  }

  const handlePressButton = (buttonType: string) => {
    onPressButton(buttonType);
    onCloseModal();
  };

  const handleLogout = () => {
    setLogOut(true);
  };

  const handleCancelLogout = () => {
    setLogOut(false);
    onCloseModal();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={onVisible}
      onRequestClose={handleCancelLogout}>
      <TouchableWithoutFeedback onPress={isLogOut ? () => {} : onCloseModal}>
        <ModalContainer>
          <ModalView>
            {isLogOut ? (
              <>
                <TextView
                  style={{
                    color: themes.light.colors.text,
                    fontSize: themes.light.fontSize.large,
                    marginBottom: themes.light.textMargin.bottom.medium,
                    fontWeight: 'bold',
                  }}>
                  {t('LogOut')}
                </TextView>

                <TextView
                  style={{
                    color: themes.light.colors.textColor2,
                    fontSize: themes.light.fontSize.large - 5,
                    marginBottom: themes.light.textMargin.bottom.medium,
                    fontWeight: '500',
                  }}>
                  {t('LogOutText')}
                </TextView>

                <PressButton
                  onPress={handleCancelLogout}
                  textColor="white"
                  text={t('Cancel')}
                  mode="Button2"
                  borderStatus={false}
                />
                <PressButton
                  onPress={() => handlePressButton('logout')}
                  textColor="white"
                  text={t('LogOut')}
                  mode="Button4"
                  borderStatus={false}
                />
              </>
            ) : (
              <>
                <PressButton
                  onPress={() => handlePressButton('ProfileScreen')}
                  textColor="black"
                  text={t('MyProfile')}
                  mode="Button3"
                  borderStatus={true}
                />
                <PressButton
                  onPress={() => handlePressButton('InvestScreen')}
                  textColor="black"
                  text={t('Deposit')}
                  mode="Button3"
                  borderStatus={true}
                />
                <PressButton
                  onPress={() => handlePressButton('TransactionHistoryScreen')}
                  textColor="black"
                  text={t('TransactionHistory')}
                  mode="Button3"
                  borderStatus={true}
                />
                <PressButton
                  onPress={() => handlePressButton('ReservationScreen')}
                  textColor="black"
                  text={t('MyReservations')}
                  mode="Button3"
                  borderStatus={true}
                />
                <PressButton
                  onPress={() => handlePressButton('CampaignsScreen')}
                  textColor="black"
                  text={t('Campaigns')}
                  mode="Button3"
                  borderStatus={true}
                />
                <PressButton
                  onPress={handleLogout} // Çıkış Yap butonuna basılınca çıkış yapma moduna geç
                  textColor="black"
                  text={t('LogOut')}
                  mode="Button3"
                  borderStatus={true}
                />
                <PressButton
                  onPress={onCloseModal}
                  textColor="black"
                  text={t('Close')}
                  mode="Button2"
                  borderStatus={true}
                />
              </>
            )}
          </ModalView>
        </ModalContainer>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ProfileMenu;
