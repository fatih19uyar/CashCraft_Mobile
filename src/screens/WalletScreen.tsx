import React, {useRef} from 'react';
import {View, Text, Button} from 'react-native';
import ButtonModal from '../components/ProfileMenu';
import ImageButton from '../components/ImageButton';
import themes from '../utils/themes';

const WalletScreen = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ImageButton
          text="Wallet"
          backColor={themes.light.colors.buttonBackground}
          leftImageSource={require('../assets/user-edit.png')} // Sol resim yolunu burada belirtin
          rightImageSource={require('../assets/arrow_right.png')} // Sağ resim yolunu burada belirtin
          onPress={() => {}}
          textColor={themes.light.colors.text}
        />
      </View>
    </>
  );
};

export default WalletScreen;
