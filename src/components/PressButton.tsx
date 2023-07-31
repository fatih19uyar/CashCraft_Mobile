import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {PressButtonProps} from '../types/type';
import colors from '../utils/colors';

const PressButton: React.FC<PressButtonProps> = props => {
  switch (props.mode) {
    case 'Button1':
      return (
        <Button
          style={styles.button}
          mode="contained"
          buttonColor={colors.buttonSecondary}
          textColor={props.textColor}
          onPress={props.onPress}>
          {props.text}
        </Button>
      );
    case 'Button2':
      return (
        <Button
          style={styles.button}
          mode="contained-tonal"
          buttonColor={colors.buttonPrimary}
          textColor={props.textColor}
          onPress={props.onPress}>
          {props.text}{' '}
        </Button>
      );
    case 'TextButton':
      return (
        <TouchableOpacity onPress={props.onPress}>
          <Text style={{color: props.textColor}}>{props.text}</Text>
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
    width: '80%',
    justifyContent: 'center',
  },
});

export default PressButton;
