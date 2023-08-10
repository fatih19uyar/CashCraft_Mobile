import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Modal, TouchableWithoutFeedback} from 'react-native';
import PressButton from './PressButton';
import TextView from './TextView';
import themes from '../utils/themes';

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
                  textColor={'black'}
                  textSize={20}
                  text={'Çıkış Yap'}
                  textStyle={'bold'}
                  textMargin={{top: 0, bottom: 10}}
                />
                <TextView
                  textColor={themes.light.colors.textColor2}
                  textSize={15}
                  text={'Çıkış yapmak istediğine emin misin?'}
                  textStyle={'500'}
                  textMargin={{top: 0, bottom: 10}}
                />
                <PressButton
                  onPress={handleCancelLogout}
                  textColor="black"
                  text="İptal Et"
                  mode="Button2"
                />
                <PressButton
                  onPress={() => handlePressButton('logout')}
                  textColor="white"
                  text="Çıkış Yap"
                  mode="Button4"
                />
              </>
            ) : (
              <>
                <PressButton
                  onPress={() => handlePressButton('ProfileScreen')}
                  textColor="black"
                  text="Profilim"
                  mode="Button3"
                />
                <PressButton
                  onPress={() => handlePressButton('para yatır')}
                  textColor="black"
                  text="Para Yatır"
                  mode="Button3"
                />
                <PressButton
                  onPress={() => handlePressButton('işlem geçmişi')}
                  textColor="black"
                  text="İşlem Geçmişi"
                  mode="Button3"
                />
                <PressButton
                  onPress={() => handlePressButton('rezervasyonlarım')}
                  textColor="black"
                  text="Rezervasyonlarım"
                  mode="Button3"
                />
                <PressButton
                  onPress={() => handlePressButton('kampanyalar')}
                  textColor="black"
                  text="Kampanyalar"
                  mode="Button3"
                />
                <PressButton
                  onPress={handleLogout} // Çıkış Yap butonuna basılınca çıkış yapma moduna geç
                  textColor="black"
                  text="Çıkış Yap"
                  mode="Button3"
                />
                <PressButton
                  onPress={onCloseModal}
                  textColor="black"
                  text="Kapat"
                  mode="Button2"
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
