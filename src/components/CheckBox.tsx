import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import styled from 'styled-components/native';
import colors from '../utils/colors';
import themes from '../utils/themes';

interface CheckboxWithLabelProps {
  input: {
    value: boolean;
    onChange: (value: boolean) => void;
  };
  label: string;
  error?: boolean;
}

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({
  input: {value, onChange},
  label,
  error,
}) => {
  return (
    <Container>
      <CheckBox
        value={value}
        onValueChange={(newValue: boolean) => onChange(newValue)}
        onCheckColor={colors.buttonPrimary}
        onTintColor={colors.buttonPrimary}
        onFillColor={themes.light.checkBox.background}
        tintColor={
          error ? themes.light.colors.errorColor : themes.light.colors.gray
        }
      />
      <LabelText>{label}</LabelText>
    </Container>
  );
};

const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-vertical: 10px;
  margin-horizontal: 30px;
  padding: 3px;
`;

const LabelText = styled(Text)`
  font-size: 12px;
  margin-left: 10px;
  font-weight: bold;
`;

export default CheckboxWithLabel;
