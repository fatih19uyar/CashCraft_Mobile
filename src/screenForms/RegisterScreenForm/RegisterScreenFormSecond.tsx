import * as React from 'react';
import {
  Field,
  InjectedFormProps,
  formValueSelector,
  reduxForm,
} from 'redux-form';
import {ConnectedProps, connect} from 'react-redux';
import PressButton from '../../components/PressButton';
import Background from '../../components/Background';
import TextView from '../../components/TextView';
import {SafeAreaView} from 'react-native-safe-area-context';
import PasswordInput from '../../components/PasswordInput';
import MyView from '../../components/MyView';
interface IProps extends ConnectedProps<typeof connector> {
  goNext: (values: any) => void;
  onReportProblem: () => void;
}
const PasswordInputField = ({input}: any) => {
  return <PasswordInput length={6} onChangePassword={input.onChange} />;
};
const RegisterScreenFormSecond: React.FC<
  IProps & InjectedFormProps<{}, IProps>
> = ({handleSubmit, goNext, onReportProblem}) => (
  <>
    <MyView>
      <TextView
        textColor={'black'}
        textSize={43}
        text={'Güvenlik Kodu Giriniz'}
        textStyle={'500'}
        textMargin={{top: 0, bottom: 100}}
      />
      <TextView
        textColor={'black'}
        textSize={18}
        text={
          'ezgi.beytas@idvlabs.com adresine gönderdiğimiz 6 haneli kodu giriniz.'
        }
        textStyle={'normal'}
        textMargin={{top: 0, bottom: 50}}
      />
      <Field name="verificationCode" component={PasswordInputField} />
      <PressButton
        onPress={handleSubmit(goNext)}
        textColor=""
        text="Devam Et"
        mode="Button2"
        borderStatus={true}
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
  })(RegisterScreenFormSecond),
);
