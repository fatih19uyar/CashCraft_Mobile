import React, {useState} from 'react';
import {Image, Modal, TextInput, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import themes from '../utils/themes';
import PressButton from '../components/PressButton';
import TextView from './TextView';
import {PopupMode} from '../types/type';
import {HelperText} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

type ConfirmationPopupProps = {
  isVisible: boolean;
  onCancel?: () => void;
  onConfirm: (confirmationCode: string) => void;
  onResent?: () => void;
  mode: PopupMode;
};

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({
  isVisible,
  onCancel,
  onConfirm,
  onResent,
  mode,
}) => {
  const {t} = useTranslation();
  const [confirmationCode, setConfirmationCode] = useState('');
  const [inputError, setInputError] = useState(false);
  const [inputErrorMessage, setInputErrorMessage] = useState('');

  const handleConfirm = () => {
    if (confirmationCode === '' && mode === 'confirmation') {
      setInputError(true);
      setInputErrorMessage('Lütfen boş bırakmayınız.');
    } else if (confirmationCode.length < 6) {
      setInputError(true);
      setInputErrorMessage('Eksik Karakter Bulunmaktadır.');
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
    if (typeof onCancel === 'function') {
      onCancel();
    }
  };

  const renderTextView = () => {
    switch (mode) {
      case 'paymentSuccess':
        return (
          <>
            <TextView
              style={{
                color: themes.light.colors.text,
                fontSize: themes.light.fontSize.large,
                marginBottom: themes.light.textMargin.bottom.medium,
                marginTop: themes.light.textMargin.top.small,
                fontWeight: 'bold',
              }}>
              {t('TransactionSuccessfull')}
            </TextView>
          </>
        );
      case 'confirmation':
        return (
          <>
            <TextView
              style={{
                color: themes.light.colors.text,
                fontSize: themes.light.fontSize.large,
                marginBottom: themes.light.textMargin.bottom.medium,
                marginTop: themes.light.textMargin.top.small,
                fontWeight: 'bold',
              }}>
              {t('ConfirmationCode')}
            </TextView>
            <TextView
              style={{
                color: themes.light.colors.text,
                fontSize: themes.light.fontSize.medium - 1,
                marginBottom: themes.light.textMargin.bottom.large,
                marginTop: themes.light.textMargin.top.small,
                fontWeight: '200',
              }}>
              {t('ConfirmationCodeEnter6Digit')}
            </TextView>
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
              style={{
                color: themes.light.colors.text,
                fontSize: themes.light.fontSize.large,
                marginBottom: themes.light.textMargin.bottom.small,
                marginTop: themes.light.textMargin.top.large,
                fontWeight: 'bold',
              }}>
              {t('TransactionSuccessfull')}
            </TextView>
            <Image
              style={{height: 100, width: 100}}
              source={require('../assets/success.png')}
            />
          </>
        );
      case 'createdAccount':
        return (
          <>
            <TextView
              style={{
                color: themes.light.colors.text,
                fontSize: themes.light.fontSize.large,
                marginBottom: themes.light.textMargin.bottom.small,
                marginTop: themes.light.textMargin.top.medium,
                fontWeight: 'bold',
              }}>
              {t('CreatedWalletAccount')}
            </TextView>
            <TextView
              style={{
                color: themes.light.colors.text,
                fontSize: themes.light.fontSize.small,
                marginBottom: themes.light.textMargin.bottom.small,
                marginTop: themes.light.textMargin.top.medium,
                fontWeight: '300',
              }}>
              {t('AfterWalletAccountCreated')}
            </TextView>
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
              style={{
                color: themes.light.colors.text,
                fontSize: themes.light.fontSize.large,
                marginBottom: themes.light.textMargin.bottom.small,
                marginTop: themes.light.textMargin.top.medium,
                fontWeight: 'bold',
              }}>
              {t('PasswordChangedSuccessfull')}
            </TextView>
            <TextView
              style={{
                color: themes.light.colors.text,
                fontSize: themes.light.fontSize.small,
                marginBottom: themes.light.textMargin.bottom.small,
                marginTop: themes.light.textMargin.top.medium,
                fontWeight: '300',
              }}>
              {t('AfterPasswordChangedSuccessfull')}
            </TextView>
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
      case 'paymentSuccess':
        return (
          <>
            <PressButton
              onPress={() => onConfirm('')}
              textColor={themes.light.colors.text1}
              text="Devam Et"
              mode="Button2"
              borderStatus={false}
            />
          </>
        );
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
                style={{
                  color: themes.light.colors.text,
                  fontSize: themes.light.fontSize.small,
                  marginBottom: themes.light.textMargin.bottom.small,
                  marginTop: themes.light.textMargin.top.medium,
                  fontWeight: '400',
                }}>
                {t('ReSendConformationCode')}
              </TextView>
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
