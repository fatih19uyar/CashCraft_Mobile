import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

interface CheckboxProps {
  checked: boolean;
  label: string;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({checked, label, onChange}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onChange}>
      <View style={[styles.checkbox, checked ? styles.checked : null]} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 30,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#000',
  },
  label: {
    fontSize: 14,
  },
});

export default Checkbox;
