import {SafeAreaView, View} from 'react-native';
import React from 'react';
import Background from '../components/Background';
import TopBar from '../components/TopBar';
import styled from 'styled-components/native';
import {Text} from 'react-native-paper';
import TextView from '../components/TextView';
import PressButton from '../components/PressButton';

type Props = {};

const ProfileScreenForm = (props: Props) => {
  return (
    <Background imageSet={1}>
      <TopBar onProfileLogoPress={() => {}} />
      <Container>
        <ProfileLogo source={require('../assets/user.png')} />
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
        <PressButton
          onPress={() => {}}
          textColor="black"
          text="Kullanıcı Bilgilerini Düzenle"
          mode="Button3"
        />
        <PressButton
          onPress={() => {}}
          textColor="black"
          text="Cüzdan Şifresi Değiştir"
          mode="Button3"
        />
        <PressButton
          onPress={() => {}}
          textColor="black"
          text="Sözleşmeler ve Yasal Zorunluluklar"
          mode="Button3"
        />
        <PressButton
          onPress={() => {}}
          textColor="black"
          text="Destek / SSS"
          mode="Button3"
        />
        <View style={{marginTop: 15}} />
        <PressButton
          onPress={() => {}}
          textColor="white"
          text="Cüzdan Hesabımı Sil"
          mode="Button4"
        />
      </ButtonContainer>
    </Background>
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
`;
const ButtonContainer = styled.View`
  width: 90%;
  align-items: center;
  margin-bottom: 15%;
  margin-top: 5%;
`;
export default ProfileScreenForm;
