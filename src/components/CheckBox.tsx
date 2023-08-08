import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import styled from 'styled-components/native';
import colors from '../utils/colors';

interface CheckboxWithLabelProps {
  input: {
    value: boolean;
    onChange: (value: boolean) => void;
  };
  label: string;
}

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({
  input: { value, onChange },
  label,
}) => {
  return (
    <Container>
      <CheckBox
        value={value}
        onValueChange={(newValue:any) => onChange(newValue)}
        onCheckColor={colors.buttonPrimary}
        onTintColor={colors.buttonPrimary}
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
`;

const LabelText = styled(Text)`
  font-size: 14px;
  margin-left: 10px;
`;

export default CheckboxWithLabel;
