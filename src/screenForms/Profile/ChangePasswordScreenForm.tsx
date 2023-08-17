import {SafeAreaView, View} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import PressButton from '../../components/PressButton';
import {
  Field,
  InjectedFormProps,
  formValueSelector,
  reduxForm,
} from 'redux-form';
import colors from '../../utils/colors';
import Input from '../../components/Input';
import {ConnectedProps, connect} from 'react-redux';
interface IProps extends ConnectedProps<typeof connector> {
  onPress: (values: any) => void;
}
const validate = (values: any) => {
  const {oldPass, newPass, reNewPass} = values;
  const errors: any = {};
  if (!oldPass) errors.oldPass = 'Lütfen eski şifrenizi giriniz.';
  if (!newPass) errors.newPass = 'Lütfen yeni şifrenizi giriniz.';
  if (!reNewPass) errors.reNewPass = 'Lütfen tekrar yeni şifrenizi giriniz.';
  if (newPass !== reNewPass) errors.reNewPass = 'Yeni şifreler eşleşmiyor.';
  return errors;
};

const ChangePasswordScreenForm: React.FC<
  IProps & InjectedFormProps<{}, IProps>
> = ({handleSubmit, onPress}) => {
  return (
    <>
      <InputContainer>
        <Field
          color={colors.inputTextBackground}
          name="oldPass"
          component={Input}
          label="Eski Şifre"
          secret={true}
          maxLength={6}
          keyboardType="numeric"
        />
        <View style={{height: '5%'}} />
        <Field
          color={colors.inputTextBackground}
          name="newPass"
          component={Input}
          maxLength={6}
          label="Yeni Şifre"
          secret={true}
          keyboardType="numeric"
        />
        <View style={{height: '5%'}} />
        <Field
          color={colors.inputTextBackground}
          name="reNewPass"
          component={Input}
          label="Yeni Şifrenizi Tekrar Giriniz"
          secret={true}
          maxLength={6}
          keyboardType="numeric"
        />
        <SafeAreaView
          style={{width: '100%', alignItems: 'center', marginTop: '10%'}}>
          <PressButton
            onPress={handleSubmit(onPress)}
            textColor="white"
            text="Bilgileri Kaydet"
            mode="Button2"
            borderStatus={false}
          />
        </SafeAreaView>
      </InputContainer>
    </>
  );
};

const InputContainer = styled.View`
  flex: 1;
  width: 90%;
  justify-content: center;
  align-items: center;
  margin-bottom: 25%;
  margin-top: 5%;
`;

const selector = formValueSelector('ChangePasswordScreen');
const mapStateToProps = (state: any) => {
  const oldPass = selector(state, 'oldPass');
  const newPass = selector(state, 'newPass');
  const reNewPass = selector(state, 'reNewPass');
  return {
    oldPass,
    newPass,
    reNewPass,
  };
};
const connector = connect(mapStateToProps);
export default connector(
  reduxForm<{}, IProps>({
    form: 'ChangePasswordScreen',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
  })(ChangePasswordScreenForm),
);
