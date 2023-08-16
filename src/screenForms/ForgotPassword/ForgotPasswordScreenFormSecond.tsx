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
  onGoNewPass: (values: any) => void;
  email: string;
}
const PasswordInputField = ({input}: any) => {
  return <PasswordInput length={6} onChangePassword={input.onChange} />;
};
const ForgotPasswordScreenFormFirst: React.FC<
  IProps & InjectedFormProps<{}, IProps>
> = ({handleSubmit, onGoNewPass, email}) => (
  <>
    <MyView>
      <TextView
        textColor={'black'}
        textSize={45}
        text={'Şifre Yenileme Onayı'}
        textStyle={'500'}
        textMargin={{top: 0, bottom: 50}}
      />
      <TextView
        textColor={'black'}
        textSize={16}
        text={`Lütfen ${email} adresine gönderilen 6 hanelik güvenlik kodunu giriniz.`}
        textStyle={'normal'}
        textMargin={{top: 0, bottom: 50}}
      />
      <Field name="verificationCode" component={PasswordInputField} />
      <PressButton
        onPress={handleSubmit(onGoNewPass)}
        textColor="white"
        text="Devam Et"
        mode="Button2"
        borderStatus={false}
      />
    </MyView>
    <SafeAreaView style={{alignItems: 'center'}}>
      <PressButton
        onPress={() => {}}
        textColor="black"
        text="Sorun Bildir"
        mode="TextButton"
        borderStatus={true}
      />
    </SafeAreaView>
  </>
);

const selector = formValueSelector('forgotPasswordScreen');
const mapStateToProps = (state: any) => {
  const verificationCode = selector(state, 'verificationCode');
  return {
    verificationCode,
  };
};
const connector = connect(mapStateToProps);
export default connector(
  reduxForm<{}, IProps>({
    form: 'forgotPasswordScreen',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
  })(ForgotPasswordScreenFormFirst),
);
