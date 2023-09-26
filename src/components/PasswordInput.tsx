import React, {useState, useRef, useEffect} from 'react';
import {View, TextInput} from 'react-native';
import styled from 'styled-components/native';
import themes from '../utils/themes';
import {HelperText} from 'react-native-paper';

type PasswordInputProps = {
  length: number;
  onChangePassword: (password: string) => void;
  shouldReset?: boolean;
  meta?: any;
};

const PasswordInput = ({
  length,
  onChangePassword,
  shouldReset,
  meta,
}: PasswordInputProps) => {
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
        <PasswordBox key={i}>
          <PasswordInputBox
            ref={ref => (inputRefs.current[i] = ref)}
            value={passwords[i]}
            secureTextEntry
            inputMode="numeric"
            onChangeText={value => handleChange(value, i)}
          />
        </PasswordBox>,
      );
    }
    return passwordBoxes;
  };
  const showError = meta && meta.touched && meta.error;

  useEffect(() => {
    setPasswords(Array(length).fill(''));
  }, [shouldReset]);

  return (
    <>
      <Container>{renderPasswordBoxes()}</Container>
      {showError ? (
        <HelperText style={{color: 'red'}} type="error">
          {meta.error}
        </HelperText>
      ) : null}
    </>
  );
};

const Container = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-vertical: 20px;
`;

const PasswordBox = styled(View)`
  width: 50px;
  height: 50px;
  border-width: 2px;
  border-color: black;
  border-radius: 5px;
  margin: 5px;
  justify-content: center;
  align-items: center;
  background-color: ${themes.light.passwordInput.background};
`;

const PasswordInputBox = styled(TextInput)`
  width: 100%;
  height: 100%;
  font-size: 20px;
  margin: 10px;
  text-align: center;
`;

export default PasswordInput;
