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
  goNext: (values: any) => void;
  onReportProblem: () => void;
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

const RegisterScreenFormFirst: React.FC<
  IProps & InjectedFormProps<{}, IProps>
> = ({handleSubmit, goNext, onReportProblem}) => (
  <>
    <Background>
      <TextView
        textColor={'black'}
        textSize={40}
        text={'Hesap Oluşturun'}
        textStyle={'500'}
        textMargin={{top: 0, bottom: 100}}
      />
      <Field
        color={colors.inputTextBackground}
        name="email_create"
        component={Input}
        label="Email"
        secret={false}
      />
      <PressButton
        onPress={handleSubmit(goNext)}
        textColor=""
        text="Devam Et"
        mode="Button2"
      />
    </Background>
    <SafeAreaView style={{alignItems: 'center'}}>
      <PressButton
        onPress={onReportProblem}
        textColor="black"
        text="Sorun Bildir"
        mode="TextButton"
      />
    </SafeAreaView>
  </>
);

const selector = formValueSelector('RegisterScreen');
const mapStateToProps = (state: any) => {
  const email = selector(state, 'email_create');
  return {
    email,
  };
};
const connector = connect(mapStateToProps);
export default connector(
  reduxForm<{}, IProps>({
    form: 'RegisterScreen',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
  })(RegisterScreenFormFirst),
);
