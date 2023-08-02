import React, {useState, useRef} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

type PasswordInputProps = {
  length: number;
  onChangePassword: (password: string) => void;
};

const PasswordInput = ({length, onChangePassword}: PasswordInputProps) => {
  const inputRefs = useRef<Array<TextInput | null>>(Array(length).fill(null));
  const [passwords, setPasswords] = useState<string[]>(Array(length).fill(''));

  const handleChange = (value: string, index: number) => {
    if (value.length <= 1) {
      const newPasswords = [...passwords];
      newPasswords[index] = value;
      setPasswords(newPasswords);

      // Otomatik olarak bir sonraki kutucuğa geçme
      if (
        index < length - 1 &&
        value.length === 1 &&
        inputRefs.current[index + 1]
      ) {
        inputRefs.current[index + 1]?.focus();
      }

      // Girilen verileri geri döndür
      const password = newPasswords.join('');
      onChangePassword(password);
    }
  };

  const renderPasswordBoxes = () => {
    const passwordBoxes = [];
    for (let i = 0; i < length; i++) {
      passwordBoxes.push(
        <View key={i} style={styles.passwordBox}>
          <TextInput
            ref={ref => (inputRefs.current[i] = ref)}
            style={styles.passwordInput}
            value={passwords[i]}
            onChangeText={value => handleChange(value, i)}
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
    marginVertical: 20,
  },
  passwordBox: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    margin: 5,
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
