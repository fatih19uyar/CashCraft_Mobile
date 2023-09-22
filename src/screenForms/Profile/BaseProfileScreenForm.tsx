import {View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import TextView from '../../components/TextView';
import ImageButton from '../../components/ImageButton';
import themes from '../../utils/themes';
import {useTranslation} from 'react-i18next';

type Props = {onPress: (values: any) => void; user: any};

const ProfileScreenForm = (props: Props) => {
  const {t} = useTranslation();

  return (
    <>
      <Container>
        <ProfileLogo source={require('../../assets/user.png')} />
        <TextContainer>
          <TextView
            textColor={'black'}
            textSize={30}
            text={props.user.name}
            textStyle={'normal'}
            textMargin={{top: 0, bottom: 0}}
          />
          <TextView
            textColor={'black'}
            textSize={12}
            text={props.user.phoneNumber}
            textStyle={'normal'}
            textMargin={{top: 10, bottom: 0}}
          />
          <TextView
            textColor={'black'}
            textSize={12}
            text={props.user.email}
            textStyle={'normal'}
            textMargin={{top: 0, bottom: 0}}
          />
        </TextContainer>
      </Container>
      <ButtonContainer>
        <ImageButton
          text={t('BaseProfileScreenFormEditUserButton')}
          backColor={themes.light.colors.buttonBackground}
          leftImageSource={require('../../assets/user-edit.png')}
          rightImageSource={require('../../assets/arrow_right.png')}
          onPress={() => props.onPress('EditUser')}
          textColor={themes.light.colors.text}
        />
        <ImageButton
          text={t('BaseProfileScreenFormChangePasswordButton')}
          backColor={themes.light.colors.buttonBackground}
          leftImageSource={require('../../assets/password-validation.png')}
          rightImageSource={require('../../assets/arrow_right.png')}
          onPress={() => props.onPress('ChangePassword')}
          textColor={themes.light.colors.text}
        />
        <ImageButton
          text={t('BaseProfileScreenFormEagreementButton')}
          backColor={themes.light.colors.buttonBackground}
          leftImageSource={require('../../assets/contract.png')}
          rightImageSource={require('../../assets/arrow_right.png')}
          onPress={() => {}}
          textColor={themes.light.colors.text}
        />
        <ImageButton
          text={t('BaseProfileScreenFormSupportButton')}
          backColor={themes.light.colors.buttonBackground}
          leftImageSource={require('../../assets/support.png')}
          rightImageSource={require('../../assets/arrow_right.png')}
          onPress={() => {}}
          textColor={themes.light.colors.text}
        />
        <View style={{marginTop: 15}} />
        <ImageButton
          text={t('BaseProfileScreenFormDeleteWalletButton')}
          backColor={themes.light.colors.buttonFourth}
          leftImageSource={require('../../assets/delete_wallet.png')}
          rightImageSource={null}
          onPress={() => props.onPress('DeleteWallet')}
          textColor={themes.light.colors.text1}
        />
      </ButtonContainer>
    </>
  );
};

const ProfileLogo = styled.Image`
  width: 110px;
  height: 110px;
`;
const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-top: 10%;
`;
const TextContainer = styled.View`
  align-items: left;
  justify-content: center;
  margin-left: 5%;
`;
const ButtonContainer = styled.View`
  width: 90%;
  align-items: center;
  margin-bottom: 15%;
  margin-top: 5%;
`;
export default ProfileScreenForm;
