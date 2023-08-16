import {View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import TextView from '../../components/TextView';
import ImageButton from '../../components/ImageButton';
import themes from '../../utils/themes';

type Props = {onPress: (values: any) => void};

const ProfileScreenForm = (props: Props) => {
  return (
    <>
      <Container>
        <ProfileLogo source={require('../../assets/user.png')} />
        <TextContainer>
          <TextView
            textColor={'black'}
            textSize={30}
            text={'Ezgi Beytaş'}
            textStyle={'normal'}
            textMargin={{top: 0, bottom: 0}}
          />
          <TextView
            textColor={'black'}
            textSize={12}
            text={'+095XXXXXXXXX'}
            textStyle={'normal'}
            textMargin={{top: 10, bottom: 0}}
          />
          <TextView
            textColor={'black'}
            textSize={12}
            text={'ezgi.beytas@idvlabs.com'}
            textStyle={'normal'}
            textMargin={{top: 0, bottom: 0}}
          />
        </TextContainer>
      </Container>
      <ButtonContainer>
        <ImageButton
          text="Kullanıcı Bilgilerini Düzenle"
          backColor={themes.light.colors.buttonBackground}
          leftImageSource={require('../../assets/user-edit.png')}
          rightImageSource={require('../../assets/arrow_right.png')}
          onPress={() => props.onPress('EditUser')}
          textColor={themes.light.colors.text}
        />
        <ImageButton
          text="Cüzdan Şifresi Değiştir"
          backColor={themes.light.colors.buttonBackground}
          leftImageSource={require('../../assets/password-validation.png')}
          rightImageSource={require('../../assets/arrow_right.png')}
          onPress={() => props.onPress('ChangePassword')}
          textColor={themes.light.colors.text}
        />
        <ImageButton
          text="Sözleşmeler ve Yasal "
          backColor={themes.light.colors.buttonBackground}
          leftImageSource={require('../../assets/contract.png')}
          rightImageSource={require('../../assets/arrow_right.png')}
          onPress={() => {}}
          textColor={themes.light.colors.text}
        />
        <ImageButton
          text="Destek / SSS"
          backColor={themes.light.colors.buttonBackground}
          leftImageSource={require('../../assets/support.png')}
          rightImageSource={require('../../assets/arrow_right.png')}
          onPress={() => {}}
          textColor={themes.light.colors.text}
        />
        <View style={{marginTop: 15}} />
        <ImageButton
          text="Cüzdan Hesabımı Sil"
          backColor={themes.light.colors.buttonFourth}
          leftImageSource={require('../../assets/delete_wallet.png')}
          rightImageSource={null}
          onPress={() => {}}
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
