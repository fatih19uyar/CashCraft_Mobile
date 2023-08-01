import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const PasswordInput = ({length}: {length: number}) => {
  const [password, setPassword] = useState('');

  const handleChange = (value: string) => {
    if (value.length <= length) {
      setPassword(value);
    }
  };

  const renderPasswordBoxes = () => {
    const passwordBoxes = [];
    for (let i = 0; i < length; i++) {
      passwordBoxes.push(
        <View key={i} style={styles.passwordBox}>
          <TextInput
            style={styles.passwordInput}
            value={password[i] || ''}
            onChangeText={handleChange}
            keyboardType="number-pad"
            maxLength={1}
            secureTextEntry
          />
        </View>,
      );
    }
    return passwordBoxes;
  };

  return <View style={styles.container}>{renderPasswordBoxes()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  passwordBox: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordInput: {
    width: '100%',
    height: '100%',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});

export default PasswordInput;
