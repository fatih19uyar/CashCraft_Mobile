import * as React from 'react';
import {
  Field,
  InjectedFormProps,
  formValueSelector,
  reduxForm,
} from 'redux-form';
import {ConnectedProps, connect} from 'react-redux';
import Input from '../components/Input';
import PressButton from '../components/PressButton';
import colors from '../utils/colors';
import Background from '../components/Background';
import TextView from '../components/TextView';
import BackButton from '../components/BackButton';
import PasswordInput from '../components/PasswordInput';
interface IProps extends ConnectedProps<typeof connector> {
  onLogin: (values: any) => void;
}

const validate = (values: any) => {
  const errors: any = {};
  if (!values.email_login) {
    errors.email_login = 'Email is required';
  } else if (!isValidEmail(values.email_login)) {
    errors.email_login = 'Invalid email format';
  }
  return errors;
};

const isValidEmail = (email_login: string) => {
  // Email format validation logic here
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email_login);
};

const LoginScreenFormFirst: React.FC<
  IProps & InjectedFormProps<{}, IProps>
> = ({handleSubmit, onLogin}) => (
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
    <PasswordInput length={5} />
    <PressButton
      onPress={handleSubmit(onLogin)}
      textColor=""
      text="Devam Et"
      mode="Button2"
    />
  </Background>
);

const selector = formValueSelector('loginScreen');
const mapStateToProps = (state: any) => {
  const email = selector(state, 'email_login');
  return {
    email,
  };
};
const connector = connect(mapStateToProps);
export default connector(
  reduxForm<{}, IProps>({
    form: 'loginScreen',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
  })(LoginScreenFormFirst),
);
