import * as React from 'react';
import {
  Field,
  InjectedFormProps,
  formValueSelector,
  reduxForm,
} from 'redux-form';
import {ConnectedProps, connect} from 'react-redux';
import Input from '../../components/Input';
import PressButton from '../../components/PressButton';
import colors from '../../utils/colors';
import Background from '../../components/Background';
import TextView from '../../components/TextView';
import {SafeAreaView} from 'react-native-safe-area-context';
interface IProps extends ConnectedProps<typeof connector> {
  onForgotPass: (values: any) => void;
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

const ForgotPasswordScreenFormFirst: React.FC<
  IProps & InjectedFormProps<{}, IProps>
> = ({handleSubmit, onForgotPass}) => (
  <>
    <Background>
      <TextView
        textColor={'black'}
        textSize={40}
        text={'Şifremi Unuttum'}
        textStyle={'500'}
        textMargin={{top: 0, bottom: 100}}
      />
      <Field
        color={colors.inputTextBackground}
        name="email_forgot"
        component={Input}
        label="E-posta Adresi"
        secret={false}
      />
      <PressButton
        onPress={handleSubmit(onForgotPass)}
        textColor="white"
        text="Şifre Yenileme Kodu Gönder"
        mode="Button2"
      />
    </Background>
  </>
);

const selector = formValueSelector('forgotPasswordScreen');
const mapStateToProps = (state: any) => {
  const email = selector(state, 'email_forgot');
  return {
    email,
  };
};
const connector = connect(mapStateToProps);
export default connector(
  reduxForm<{}, IProps>({
    form: 'forgotPasswordScreen',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
  })(ForgotPasswordScreenFormFirst),
);
