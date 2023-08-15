import * as React from 'react';
import {
  Field,
  InjectedFormProps,
  formValueSelector,
  reduxForm,
} from 'redux-form';
import {ConnectedProps, connect} from 'react-redux';
import PressButton from '../../components/PressButton';
import TextView from '../../components/TextView';
import PasswordInput from '../../components/PasswordInput';
import {SafeAreaView} from 'react-native';
import MyView from '../../components/MyView';
interface IProps extends ConnectedProps<typeof connector> {
  goToNextForm: (values: any) => void;
  onForgotPassword: () => void;
}
const PasswordInputField = ({input}: any) => {
  return <PasswordInput length={6} onChangePassword={input.onChange} />;
};
const LoginScreenFormSecond: React.FC<
  IProps & InjectedFormProps<{}, IProps>
> = ({handleSubmit, goToNextForm, onForgotPassword}) => (
  <>
    <MyView>
      <TextView
        textColor={'black'}
        textSize={39}
        text={'Giriş Yapmak İçin Lütfen Cüzdan Şifrenizi Giriniz.'}
        textStyle={'500'}
        textMargin={{top: 20, bottom: 50}}
      />
      <Field name="password" component={PasswordInputField} />
      <PressButton
        onPress={handleSubmit(goToNextForm)}
        textColor=""
        text="Devam Et"
        mode="Button2"
        borderStatus={true}
      />
    </MyView>
    <SafeAreaView style={{alignItems: 'center'}}>
      <PressButton
        onPress={onForgotPassword}
        textColor="black"
        text="Şifremi Unuttum"
        mode="TextButton"
        borderStatus={true}
      />
    </SafeAreaView>
  </>
);

const selector = formValueSelector('loginScreen');
const mapStateToProps = (state: any) => {
  const password = selector(state, 'password');
  return {
    password,
  };
};
const connector = connect(mapStateToProps);
export default connector(
  reduxForm<{}, IProps>({
    form: 'loginScreen',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
  })(LoginScreenFormSecond),
);
