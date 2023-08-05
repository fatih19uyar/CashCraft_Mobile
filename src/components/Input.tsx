import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import {TextInput, HelperText} from 'react-native-paper';
import {InputProps} from '../types/type';
import colors from '../utils/colors';

const Input: React.FC<InputProps> = ({secret, label, input, meta}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const getWidth = () => {
    const {width} = Dimensions.get('window');
    return width * 0.8; // Ekranın yatay çözünürlüğünün %80'ini hesapla
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
    <SafeAreaView style={[styles.container, {width: getWidth()}]}>
      <TextInput
        style={[styles.input, {backgroundColor: colors.white}]}
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
      />
      {showError && (
        <HelperText style={{color: 'red'}} type="error">
          {meta.error}
        </HelperText>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    margin: 10,
  },
});

export default Input;
