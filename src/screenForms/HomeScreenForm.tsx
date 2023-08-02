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
      <TextView
        textColor={'black'}
        textSize={40}
        text={'Ana Sayfa'}
        textStyle={'500'}
        textMargin={{top: 20, bottom: 100}}
      />
    </Background>
  );
};

export default HomeScreenForm;
