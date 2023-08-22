import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImageButton from '../../components/ImageButton';
import themes from '../../utils/themes';

type Props = {
  goScreen: (screenName: string) => void; // goScreen prop'unu tanımladık
};

const WalletScreenFormFirst: React.FC<Props> = props => {
  return (
    <>
      <ImageButton
        text="Banka Kartılarım"
        backColor={themes.light.colors.buttonBackground}
        leftImageSource={''}
        rightImageSource={require('../../assets/arrow_right.png')}
        onPress={() => props.goScreen('MyBankCardScreen')}
        textColor={themes.light.colors.text}
      />
      <ImageButton
        text="Kredi Kartılarım"
        backColor={themes.light.colors.buttonBackground}
        leftImageSource={''}
        rightImageSource={require('../../assets/arrow_right.png')}
        onPress={() => {
          props.goScreen('CreditCardScreen');
        }}
        textColor={themes.light.colors.text}
      />
      <ImageButton
        text="Mağaza Kartılarım"
        backColor={themes.light.colors.buttonBackground}
        leftImageSource={''}
        rightImageSource={require('../../assets/arrow_right.png')}
        onPress={() => {
          props.goScreen('MyBankCardScreen');
        }}
        textColor={themes.light.colors.text}
      />
      <ImageButton
        text="Hediye Kartılarım"
        backColor={themes.light.colors.buttonBackground}
        leftImageSource={''}
        rightImageSource={require('../../assets/arrow_right.png')}
        onPress={() => {
          props.goScreen('MyBankCardScreen');
        }}
        textColor={themes.light.colors.text}
      />
    </>
  );
};

export default WalletScreenFormFirst;

const styles = StyleSheet.create({});
