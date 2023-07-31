import {Image, View} from 'react-native';
import React from 'react';
import Background from '../components/Background';
import PressButton from '../components/PressButton';
import TextView from '../components/TextView';

type HomeScreenFormProps = {
  onSign: () => void;
  onRegister: () => void;
};

const HomeScreenForm = (props: HomeScreenFormProps) => {
  return (
    <Background>
      <Image
        source={require('../assets/idvlabs-logo.png')}
        style={{width: 200, height: 52, marginBottom: 20}}
      />
      <TextView
        textColor={'black'}
        textSize={18}
        text={'Cüzdan ile tüm kartların tek bir yerde.'}
        textStyle={'500'}
        textMargin={{top: 20, bottom: 250}}
      />
      <PressButton
        textColor={'black'}
        mode={'Button1'}
        text={'Giriş Yap'}
        onPress={props.onSign}
      />
      <PressButton
        textColor={'black'}
        mode={'Button2'}
        text={'Hesap Oluştur'}
        onPress={props.onRegister}
      />
    </Background>
  );
};

export default HomeScreenForm;
