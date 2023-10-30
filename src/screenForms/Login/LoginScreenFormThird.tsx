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
import {useTranslation} from 'react-i18next';
import themes from '../../utils/themes';
interface IProps extends ConnectedProps<typeof connector> {
  onResendCode: (values: any) => void;
  onLogin: (values: any) => void;
}
const PasswordInputField = ({input}: any) => {
  return <PasswordInput length={6} onChangePassword={input.onChange} />;
};
const LoginScreenFormThird: React.FC<
  IProps & InjectedFormProps<{}, IProps>
> = ({handleSubmit, onResendCode, onLogin}) => {
  const {t} = useTranslation();
  return (
    <>
      <MyView>
        <TextView
          style={{
            color: themes.light.colors.text,
            fontSize: themes.light.fontSize.customeSize2,
            marginBottom: themes.light.textMargin.bottom.large,
            marginTop: themes.light.textMargin.top.extraLarge,
            fontWeight: '500',
          }}>
          {t('LoginScreenFormThirdHeaderText')}
        </TextView>
        <TextView
          style={{
            color: themes.light.colors.text,
            fontSize: themes.light.fontSize.medium,
            fontWeight: 'normal',
          }}>
          {t('LoginScreenFormSecondText')}
        </TextView>
        <Field name="verificationCode" component={PasswordInputField} />
        <Image
          source={require('../../assets/mail-send.png')}
          style={{width: 100, height: 100, margin: 10}}
        />
        <PressButton
          onPress={handleSubmit(onLogin)}
          textColor="white"
          text={t('Login')}
          mode="Button2"
          borderStatus={false}
        />
      </MyView>
      <SafeAreaView style={{alignItems: 'center'}}>
        <PressButton
          onPress={handleSubmit(onResendCode)}
          textColor="black"
          text={t('ReSend')}
          mode="TextButton"
          borderStatus={true}
        />
      </SafeAreaView>
    </>
  );
};

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
