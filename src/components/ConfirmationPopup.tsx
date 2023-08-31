import React, {useState} from 'react';
import {Image, Modal, TextInput, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import themes from '../utils/themes';
import PressButton from '../components/PressButton';
import TextView from './TextView';
import {PopupMode} from '../types/type';
import {HelperText} from 'react-native-paper';

type ConfirmationPopupProps = {
  isVisible: boolean;
  onCancel: () => void;
  onConfirm: (confirmationCode: string) => void;
  onResent: () => void;
  mode: PopupMode;
};

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({
  isVisible,
  onCancel,
  onConfirm,
  onResent,
  mode,
}) => {
  const [confirmationCode, setConfirmationCode] = useState('');
  const [inputError, setInputError] = useState(false);
  const [inputErrorMessage, setInputErrorMessage] = useState('');

  const handleConfirm = () => {
    console.log(confirmationCode);

    if (confirmationCode === '' && mode === 'confirmation') {
      setInputError(true);
      setInputErrorMessage('Lütfen boş bırakmayınız.');
    } else if (confirmationCode.length < 6) {
      setInputError(true);
      setInputErrorMessage('Eksik Karakter Bulunmaktadır.');
    } else if (confirmationCode !== '123456') {
      setInputError(true);
      setInputErrorMessage('Hatalı şifre.');
    } else if (confirmationCode.length < 6 && mode === 'confirmation') {
      setInputError(true);
      setInputErrorMessage('Lütfen 6 haneli kodu giriniz.');
    } else {
      setInputErrorMessage('');
      setInputError(false);
      onConfirm(confirmationCode);
      setConfirmationCode('');
    }
  };
  const pressCancel = () => {
    setConfirmationCode('');
    setInputError(false);
    setInputErrorMessage('');
    onCancel();
  };

  const renderTextView = () => {
    switch (mode) {
      case 'confirmation':
        return (
          <>
            <TextView
              textColor={themes.light.colors.text}
              textSize={20}
              text={'Onay Kodu'}
              textStyle={'bold'}
              textMargin={{top: 10, bottom: 5}}
            />
            <TextView
              textColor={themes.light.colors.text}
              textSize={15}
              text={'Lütfen gönderilen 6 hanelik güvenlik kodunu giriniz.'}
              textStyle={'200'}
              textMargin={{top: 5, bottom: 20}}
            />
            <TextInput
              style={{
                backgroundColor: themes.light.colors.buttonSecondary,
                padding: 10,
                borderRadius: 8,
                width: '80%',
                fontSize: 16,
                color: themes.light.colors.text,
                textAlign: 'center',
              }}
              value={confirmationCode}
              onChangeText={setConfirmationCode}
              secureTextEntry={true}
              inputMode="numeric"
              maxLength={6}
            />
            {inputError && (
              <HelperText style={{color: 'red'}} type="error">
                {inputErrorMessage}
              </HelperText>
            )}
          </>
        );
      case 'success':
        return (
          <>
            <TextView
              textColor={themes.light.colors.text}
              textSize={20}
              text={'İşlem Başarılı'}
              textStyle={'bold'}
              textMargin={{top: 10, bottom: 5}}
            />
            <Image
              style={{height: 100, width: 100}}
              source={require('../assets/success.gif')}
            />
          </>
        );
      case 'createdAccount':
        return (
          <>
            <TextView
              textColor={themes.light.colors.text}
              textSize={20}
              text={'Cüzdan Hesabın Oluşturuldu'}
              textStyle={'bold'}
              textMargin={{top: 10, bottom: 5}}
            />
            <TextView
              textColor={themes.light.colors.text}
              textSize={12}
              text={
                'Hoşgeldin! Artık sende idvlabs Cüzdan hesanına sahipsin. Hesabına erişmen için seni giriş ekranına yönlendiriyoruz.'
              }
              textStyle={'300'}
              textMargin={{top: 10, bottom: 5}}
            />
            <Image
              style={{height: 100, width: 100}}
              source={require('../assets/success.png')}
            />
          </>
        );
      case 'changedPassword':
        return (
          <>
            <TextView
              textColor={themes.light.colors.text}
              textSize={20}
              text={'Cüzdan Şifresi Başarıyla Değiştirildi'}
              textStyle={'bold'}
              textMargin={{top: 10, bottom: 5}}
            />
            <TextView
              textColor={themes.light.colors.text}
              textSize={12}
              text={
                'idvlabs Cüzdan hesabının şifresini başarıyla değiştirdin. Hesabına erişmen için giriş ekranına yönlendiriyoruz.'
              }
              textStyle={'300'}
              textMargin={{top: 10, bottom: 5}}
            />
            <Image
              style={{height: 100, width: 100}}
              source={require('../assets/success.png')}
            />
          </>
        );
      case 'default':
        return null;
      default:
        return null;
    }
  };

  const renderButtonView = () => {
    switch (mode) {
      case 'confirmation':
        return (
          <>
            <PressButton
              onPress={handleConfirm}
              textColor={themes.light.colors.text1}
              text="Devam Et"
              mode="Button2"
              borderStatus={false}
            />
            <PressButton
              onPress={pressCancel}
              textColor={themes.light.colors.text1}
              text="Vazgeç"
              mode="Button4"
              borderStatus={false}
            />
            <TouchableOpacity onPress={onResent}>
              <TextView
                textColor={themes.light.colors.text}
                textSize={12}
                text={'Tekrar Onay Kodu Gönder'}
                textStyle={'400'}
                textMargin={{top: 10, bottom: 5}}
              />
            </TouchableOpacity>
          </>
        );
      case 'success':
        return (
          <PressButton
            onPress={() => {
              onConfirm('close');
            }}
            textColor={themes.light.colors.text1}
            text="Tamam"
            mode="Button2"
            borderStatus={false}
          />
        );
      case 'createdAccount':
        return (
          <PressButton
            onPress={() => {
              onConfirm('close');
            }}
            textColor={themes.light.colors.text1}
            text="Tamam"
            mode="Button2"
            borderStatus={false}
          />
        );
      case 'changedPassword':
        return (
          <>
            <PressButton
              onPress={() => {
                onConfirm('close');
              }}
              textColor={themes.light.colors.text1}
              text="Tamam"
              mode="Button2"
              borderStatus={false}
            />
          </>
        );
      case 'default':
        return null;
      default:
        return null;
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onCancel}>
      <Container>
        <PopupContainer>
          <TextViewContainer>{renderTextView()}</TextViewContainer>
          <ButtonContainer>{renderButtonView()}</ButtonContainer>
        </PopupContainer>
      </Container>
    </Modal>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PopupContainer = styled.View`
  width: 80%;
  background-color: ${themes.light.colors.background};
  border-radius: 10px;
  padding: 20px;
`;

const TextViewContainer = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export default ConfirmationPopup;
