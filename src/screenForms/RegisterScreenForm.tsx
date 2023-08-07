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
interface IProps extends ConnectedProps<typeof connector> {
  onRegister: (values: any) => void;
}

const validate = (values: any) => {
  const errors: any = {};
  if (!values.email_register) {
    errors.email_register = 'Email is required';
  } else if (!isValidEmail(values.email_register)) {
    errors.email_register = 'Invalid email format';
  }
  return errors;
};

const isValidEmail = (email_register: string) => {
  // Email format validation logic here
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email_register);
};

const RegisterScreenForm: React.FC<IProps & InjectedFormProps<{}, IProps>> = ({
  handleSubmit,

  onRegister,
}) => (
  <Background imageSet={1}>
    <TextView
      textColor={'black'}
      textSize={40}
      text={'Hesap Oluşturun'}
      textStyle={'500'}
      textMargin={{top: 0, bottom: 200}}
    />
    <Field
      color={colors.inputTextBackground}
      name="email_register"
      component={Input}
      label="Email"
      secret={false}
    />
    <PressButton
      onPress={handleSubmit(onRegister)}
      textColor=""
      text="Devam Et"
      mode="Button2"
    />
  </Background>
);

const selector = formValueSelector('registerScreen');
const mapStateToProps = (state: any) => {
  const email = selector(state, 'email_register');
  return {
    email,
  };
};
const connector = connect(mapStateToProps);
export default connector(
  reduxForm<{}, IProps>({
    form: 'registerScreen',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
  })(RegisterScreenForm),
);
