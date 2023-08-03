import React from 'react';
import {Field, WrappedFieldProps, BaseFieldProps} from 'redux-form';
import PhoneInput, {PhoneInputProps} from 'react-native-phone-number-input';

interface PhoneInputAdapterProps extends BaseFieldProps {
  // Herhangi ekstra prop'ları buraya ekleyebilirsiniz
}

// PhoneInput bileşenini Redux Form uyumlu hale getirmek için bir adaptör bileşeni oluşturuyoruz
const PhoneInputAdapter: React.FC<
  WrappedFieldProps & PhoneInputAdapterProps
> = ({input: {onChange, value, ...restInput}, meta, ...rest}) => {
  const showError = meta.touched && meta.error;

  return (
    <>
      <PhoneInput
        defaultCode="TR" // Telefon numarasının ülke kodu
        onChangeFormattedText={onChange} // Değişiklikleri yönetmek için onChange prop'u olarak Redux Form'dan gelen onChange fonksiyonunu kullanıyoruz
        value={value}
        {...restInput}
        {...rest}
      />
      {showError && <span style={{color: 'red'}}>{meta.error}</span>}
    </>
  );
};

// PhoneInput bileşenini kullanabilmek için bir fonksiyon oluşturuyoruz
const renderPhoneInput = (props: PhoneInputAdapterProps) => (
  <Field component={PhoneInputAdapter} {...props} />
);

export default renderPhoneInput;
