import * as React from 'react';
import {
  Field,
  InjectedFormProps,
  formValueSelector,
  reduxForm,
} from 'redux-form';
import {ConnectedProps, connect} from 'react-redux';
import PressButton from '../components/PressButton';
import Background from '../components/Background';
import TextView from '../components/TextView';
import PasswordInput from '../components/PasswordInput';
import {SafeAreaView} from 'react-native';
interface IProps extends ConnectedProps<typeof connector> {
  onLogin: (values: any) => void;
  onForgotPassword: () => void;
}
const PasswordInputField = ({input}: any) => {
  return <PasswordInput length={5} onChangePassword={input.onChange} />;
};
const LoginScreenFormFirst: React.FC<
  IProps & InjectedFormProps<{}, IProps>
> = ({handleSubmit, onLogin, onForgotPassword}) => (
  <>
    <Background>
      <TextView
        textColor={'black'}
        textSize={39}
        text={'Giriş Yapmak İçin Lütfen Cüzdan Şifrenizi Giriniz.'}
        textStyle={'500'}
        textMargin={{top: 20, bottom: 50}}
      />
      <TextView
        textColor={'black'}
        textSize={18}
        text={'Hoşgeldiniz, Ezgi Beytaş'}
        textStyle={'normal'}
        textMargin={{top: 0, bottom: 50}}
      />
      <Field name="password" component={PasswordInputField} />
      <PressButton
        onPress={handleSubmit(onLogin)}
        textColor=""
        text="Devam Et"
        mode="Button2"
      />
    </Background>
    <SafeAreaView style={{alignItems: 'center'}}>
      <PressButton
        onPress={onForgotPassword}
        textColor="black"
        text="Şifremi Unuttum"
        mode="TextButton"
      />
    </SafeAreaView>
  </>
);

const selector = formValueSelector('loginScreen');
const mapStateToProps = (state: any) => {
  const email = selector(state, 'email_login');
  const password = selector(state, 'password');
  return {
    email,
    password,
  };
};
const connector = connect(mapStateToProps);
export default connector(
  reduxForm<{}, IProps>({
    form: 'loginScreen',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
  })(LoginScreenFormFirst),
);
