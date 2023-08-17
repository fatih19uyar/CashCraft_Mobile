import React, {useState} from 'react';
import {SafeAreaView, Dimensions} from 'react-native';
import {TextInput, HelperText} from 'react-native-paper';
import {InputProps} from '../types/type';
import colors from '../utils/colors';
import styled, {css} from 'styled-components/native';
import themes from '../utils/themes';

const Input: React.FC<InputProps> = ({
  secret,
  label,
  input,
  meta,
  ...restProps
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const getWidth = () => {
    const {width} = Dimensions.get('window');
    return width * 0.8;
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const renderIcon = () => {
    return (
      <TextInput.Icon
        icon={passwordVisible ? 'eye-off' : 'eye'}
        onPress={togglePasswordVisibility}
      />
    );
  };

  const showError = meta.touched && meta.error;

  return (
    <Container width={getWidth()}>
      <StyledTextInput
        label={label}
        secureTextEntry={secret && !passwordVisible}
        right={secret && renderIcon()}
        value={input.value}
        onChangeText={input.onChange}
        error={showError}
        autoCapitalize="none"
        textColor={colors.text}
        activeUnderlineColor={colors.text}
        outlineColor={colors.inputTextOutline}
        {...restProps}
      />
      {showError && (
        <HelperText style={{color: 'red'}} type="error">
          {meta.error}
        </HelperText>
      )}
    </Container>
  );
};

// Styled Components
const Container = styled(SafeAreaView)<{width: number}>`
  align-self: center;
  width: ${props => props.width}px;
`;

const StyledTextInput = styled(TextInput)`
  width: 100%;
  margin: 5px 0px 5px 0px;
  background-color: ${themes.light.textInput.background};
`;

export default Input;
