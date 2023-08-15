import React from 'react';
import {TouchableOpacity, Text, Dimensions} from 'react-native';
import {Button} from 'react-native-paper';
import {PressButtonProps} from '../types/type';
import colors from '../utils/colors';
import styled from 'styled-components/native';
import themes from '../utils/themes';

const PressButton: React.FC<PressButtonProps> = props => {
  const {mode, textColor, onPress, text, borderStatus} = props;

  switch (mode) {
    case 'Button1':
      return (
        <ContainedButton
          mode="contained"
          buttonColor={colors.buttonSecondary}
          textColor={textColor}
          style={{
            borderColor: themes.light.colors.buttonBorderColor,
            borderWidth: borderStatus ? 1 : 0,
          }}
          onPress={onPress}>
          {text}
        </ContainedButton>
      );
    case 'Button2':
      return (
        <ContainedButton
          mode="contained-tonal"
          buttonColor={colors.buttonPrimary}
          textColor={textColor}
          style={{
            borderColor: themes.light.colors.buttonBorderColor,
            borderWidth: borderStatus ? 1 : 0,
          }}
          onPress={onPress}>
          {text}
        </ContainedButton>
      );
    case 'Button3':
      return (
        <ContainedButton
          mode="contained-tonal"
          buttonColor={themes.light.colors.buttonThird}
          textColor={textColor}
          style={{
            borderColor: themes.light.colors.buttonBorderColor,
            borderWidth: borderStatus ? 1 : 0,
          }}
          onPress={onPress}>
          {text}
        </ContainedButton>
      );
    case 'Button4':
      return (
        <ContainedButton
          mode="contained-tonal"
          buttonColor={themes.light.colors.buttonFourth}
          textColor={textColor}
          style={{
            borderColor: themes.light.colors.buttonBorderColor,
            borderWidth: borderStatus ? 1 : 0,
          }}
          onPress={onPress}>
          {text}
        </ContainedButton>
      );
    case 'TextButton':
      return (
        <TouchableOpacity onPress={onPress}>
          <TextButton color={textColor}>{text}</TextButton>
        </TouchableOpacity>
      );

    default:
      return null;
  }
};

const ContainedButton = styled(Button)`
  width: 80%;
  margin-top: 10px;
  margin-vertical: 5px;
  justify-content: center;
`;

const TextButton = styled(Text)<{color: string}>`
  align-self: flex-end;
  margin-vertical: 20px;
  color: ${(props: any) => props.color};
`;

export default PressButton;
