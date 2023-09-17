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
import {SafeAreaView} from 'react-native-safe-area-context';
import PasswordInput from '../../components/PasswordInput';
import MyView from '../../components/MyView';
import themes from '../../utils/themes';
interface IProps extends ConnectedProps<typeof connector> {
  goNext: (values: any) => void;
  onReportProblem: () => void;
  email: string;
}
const validate = (values: any) => {
  const errors: any = {};

  if (!values.verificationCode) {
    errors.verificationCode = 'Bu alan boş bırakılamaz';
  } else if (values.verificationCode.length !== 6) {
    errors.verificationCode = 'Şifre 6 haneli olmalıdır';
  }
  return errors;
};
const PasswordInputField = ({input, meta}: any) => {
  return (
    <PasswordInput length={6} onChangePassword={input.onChange} meta={meta} />
  );
};
const RegisterScreenFormSecond: React.FC<
  IProps & InjectedFormProps<{}, IProps>
> = ({handleSubmit, goNext, onReportProblem, email}) => (
  <>
    <MyView>
      <TextView
        textColor={'black'}
        textSize={45}
        text={'Güvenlik Kodu Giriniz'}
        textStyle={'500'}
        textMargin={{top: 50, bottom: 50}}
      />
      <TextView
        textColor={'black'}
        textSize={18}
        text={email + ' gönderdiğimiz 6 haneli kodu giriniz.'}
        textStyle={'normal'}
        textMargin={{top: 0, bottom: 50}}
      />
      <Field name="verificationCode" component={PasswordInputField} />
      <PressButton
        onPress={handleSubmit(goNext)}
        textColor={themes.light.colors.text1}
        text="Devam Et"
        mode="Button2"
        borderStatus={false}
      />
    </MyView>
    <SafeAreaView style={{alignItems: 'center'}}>
      <PressButton
        onPress={onReportProblem}
        textColor="black"
        text="Sorun Bildir"
        mode="TextButton"
        borderStatus={true}
      />
    </SafeAreaView>
  </>
);

const selector = formValueSelector('RegisterScreen');
const mapStateToProps = (state: any) => {
  const verificationCode = selector(state, 'verificationCode');
  return {
    verificationCode,
  };
};
const connector = connect(mapStateToProps);
export default connector(
  reduxForm<{}, IProps>({
    form: 'RegisterScreen',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
  })(RegisterScreenFormSecond),
);
