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
import BackButton from '../../components/BackButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View} from 'react-native';
import MyView from '../../components/MyView';
interface IProps extends ConnectedProps<typeof connector> {
  goToNextForm: (values: any) => void;
  onReportProblem: () => void;
}

const validate = (values: any) => {
  const errors: any = {};
  if (!values.email_login) {
    errors.email_login = 'Lütfen e-posta giriniz.';
  } else if (!isValidEmail(values.email_login)) {
    errors.email_login = 'Geçersiz e-posta formatı';
  }
  return errors;
};

const isValidEmail = (email_login: string) => {
  // Email format validation logic here
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email_login);
};

const LoginScreenFormFirst: React.FC<
  IProps & InjectedFormProps<{}, IProps>
> = ({handleSubmit, goToNextForm, onReportProblem}) => (
  <>
    <MyView>
      <TextView
        textColor={'black'}
        textSize={40}
        text={'Giriş Yapın'}
        textStyle={'500'}
        textMargin={{top: 0, bottom: 100}}
      />
      <Field
        color={colors.inputTextBackground}
        name="email"
        component={Input}
        label="E-posta Adresi"
        secret={false}
      />
      <PressButton
        onPress={handleSubmit(goToNextForm)}
        textColor=""
        text="Devam Et"
        mode="Button2"
      />
    </MyView>
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

const selector = formValueSelector('loginScreen');
const mapStateToProps = (state: any) => {
  const email = selector(state, 'email');
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
