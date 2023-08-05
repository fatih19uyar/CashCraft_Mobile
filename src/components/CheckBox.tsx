import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import colors from '../utils/colors';

interface CheckboxWithLabelProps {
  input: {
    value: boolean;
    onChange: (value: boolean) => void;
  };
  label: string;
}

const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({
  input: {value, onChange},
  label,
}) => {
  return (
    <View style={styles.container}>
      <CheckBox
        style={styles.checkbox}
        value={value}
        onCheckColor={colors.buttonPrimary}
        onTintColor={colors.buttonPrimary}
        onValueChange={newValue => onChange(newValue)}
      />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 30,
  },
  label: {
    fontSize: 14,
    marginLeft: 10,
  },
  checkbox: {
    margin: 5,
  },
});

export default CheckboxWithLabel;
