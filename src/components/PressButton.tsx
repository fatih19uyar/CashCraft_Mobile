import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Dimensions} from 'react-native';
import {Button} from 'react-native-paper';
import {PressButtonProps} from '../types/type';
import colors from '../utils/colors';

const PressButton: React.FC<PressButtonProps> = props => {
  const {mode, textColor, onPress, text} = props;

  const getButtonWidth = () => {
    const {width} = Dimensions.get('window');
    return width * 0.8; // Ekranın yatay çözünürlüğünün %80'ini hesapla
  };

  switch (mode) {
    case 'Button1':
      return (
        <Button
          style={[styles.button, {width: getButtonWidth()}]}
          mode="contained"
          buttonColor={colors.buttonSecondary}
          textColor={textColor}
          onPress={onPress}>
          {text}
        </Button>
      );
    case 'Button2':
      return (
        <Button
          style={[styles.button, {width: getButtonWidth()}]}
          mode="contained-tonal"
          buttonColor={colors.buttonPrimary}
          textColor={textColor}
          onPress={onPress}>
          {text}
        </Button>
      );
    case 'TextButton':
      return (
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.textButton, {color: textColor}]}>{text}</Text>
        </TouchableOpacity>
      );
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginVertical: 5,
    justifyContent: 'center',
  },
  textButton: {
    alignSelf: 'flex-end', // Yazıyı bileşenin içinde altta hizala
    marginVertical: 20, // Üst ve altta 20 birimlik boşluk bırak
  },
});

export default PressButton;
