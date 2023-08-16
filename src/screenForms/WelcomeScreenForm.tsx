import {Image, View} from 'react-native';
import React from 'react';
import Background from '../components/Background';
import PressButton from '../components/PressButton';
import TextView from '../components/TextView';

type WelcomeScreenFormProps = {
  onSign: () => void;
  onRegister: () => void;
};

const WelcomeScreenForm = (props: WelcomeScreenFormProps) => {
  return (
    <Background imageSet={1}>
      <Image
        source={require('../assets/idvlabs-logo.png')}
        style={{width: 200, height: 52, marginBottom: 20}}
      />
      <TextView
        textColor={'black'}
        textSize={18}
        text={'Cüzdan ile tüm kartların tek bir yerde.'}
        textStyle={'500'}
        textMargin={{top: 20, bottom: 100}}
      />
      <PressButton
        textColor={'black'}
        mode={'Button1'}
        text={'Giriş Yap'}
        onPress={props.onSign}
        borderStatus={false}
      />
      <PressButton
        textColor={'white'}
        mode={'Button2'}
        text={'Hesap Oluştur'}
        onPress={props.onRegister}
        borderStatus={false}
      />
    </Background>
  );
};

export default WelcomeScreenForm;
