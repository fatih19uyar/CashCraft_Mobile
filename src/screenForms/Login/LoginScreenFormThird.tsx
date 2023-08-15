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
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from 'react-native';
import MyView from '../../components/MyView';
interface IProps extends ConnectedProps<typeof connector> {
  onResendCode: () => void;
  onLogin: (values: any) => void;
}
const PasswordInputField = ({input}: any) => {
  return <PasswordInput length={6} onChangePassword={input.onChange} />;
};
const LoginScreenFormThird: React.FC<
  IProps & InjectedFormProps<{}, IProps>
> = ({handleSubmit, onResendCode, onLogin}) => (
  <>
    <MyView>
      <TextView
        textColor={'black'}
        textSize={39}
        text={'Telefonunuza Gelen Giriş Şifresini Girin'}
        textStyle={'500'}
        textMargin={{top: 100, bottom: 20}}
      />
      <TextView
        textColor={'black'}
        textSize={18}
        text={
          'Lütfen 5XXXXXXXXXX numarasına gönderilen 6 hanelik güvenlik kodunu giriniz.'
        }
        textStyle={'normal'}
        textMargin={{top: 0, bottom: 0}}
      />
      <Field name="verificationCode" component={PasswordInputField} />
      <Image
        source={require('../../assets/mail-send.png')}
        style={{width: 100, height: 100, margin: 10}}
      />
      <PressButton
        onPress={handleSubmit(onLogin)}
        textColor=""
        text="Giriş Yap"
        mode="Button2"
        borderStatus={true}
      />
    </MyView>
    <SafeAreaView style={{alignItems: 'center'}}>
      <PressButton
        onPress={onResendCode}
        textColor="black"
        text="Tekrar Gönder"
        mode="TextButton"
        borderStatus={true}
      />
    </SafeAreaView>
  </>
);

const selector = formValueSelector('loginScreen');
const mapStateToProps = (state: any) => {
  const verificationCode = selector(state, 'verificationCode');
  return {
    verificationCode,
  };
};
const connector = connect(mapStateToProps);
export default connector(
  reduxForm<{}, IProps>({
    form: 'loginScreen',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
  })(LoginScreenFormThird),
);
