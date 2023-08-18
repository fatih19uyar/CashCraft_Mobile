import React, {useRef} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import PhoneNumberInput from 'react-native-phone-number-input';
import {WrappedFieldProps} from 'redux-form';

type PhoneNumberInputWrapperProps = WrappedFieldProps & {
  label: string | null;
  meta: {
    error: string;
    touched: boolean;
  };
};

const PhoneNumberInputWrapper: React.FC<PhoneNumberInputWrapperProps> = ({
  input,
  label,
  meta: {error, touched},
}) => {
  const phoneInput = useRef<PhoneInput>(null);

  return (
    <>
      <PhoneNumberInput
        defaultCode="TR"
        layout="first"
        withDarkTheme
        placeholder={label ? label : 'Telefon Numarası'}
        ref={phoneInput}
        onChangeFormattedText={input.onChange}
        value={input.value}
        codeTextStyle={{fontSize: 16, color: 'black'}}
        withShadow
        textInputProps={{maxLength: 10}} // limit 10 olarak ayarlandı
        autoFocus
        textInputStyle={{
          fontSize: 16,
          color: 'black',
          borderBottomWidth: 1,
          borderColor: 'black',
        }}
      />
      {touched && error && <span style={{color: 'red'}}>{error}</span>}
    </>
  );
};

export default PhoneNumberInputWrapper;
