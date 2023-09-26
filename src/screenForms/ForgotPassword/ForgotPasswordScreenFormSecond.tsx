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
import {useTranslation} from 'react-i18next';
interface IProps extends ConnectedProps<typeof connector> {
  onGoNewPass: (values: any) => void;
  onSendReport: () => void;
  email: string;
}
const PasswordInputField = ({input}: any) => {
  return <PasswordInput length={6} onChangePassword={input.onChange} />;
};
const ForgotPasswordScreenFormSecond: React.FC<
  IProps & InjectedFormProps<{}, IProps>
> = ({handleSubmit, onGoNewPass, onSendReport, email}) => {
  const {t} = useTranslation();
  return (
    <>
      <MyView>
        <TextView
          textColor={'black'}
          textSize={45}
          text={t('ForgotPasswordScreenFormSecondHeaderText')}
          textStyle={'500'}
          textMargin={{top: 0, bottom: 50}}
        />
        <TextView
          textColor={'black'}
          textSize={16}
          text={email + ' ' + t('ForgotPasswordScreenFormSecondText')}
          textStyle={'normal'}
          textMargin={{top: 0, bottom: 50}}
        />
        <Field name="verificationCode" component={PasswordInputField} />
        <PressButton
          onPress={handleSubmit(onGoNewPass)}
          textColor="white"
          text={t('Next')}
          mode="Button2"
          borderStatus={false}
        />
      </MyView>
      <SafeAreaView style={{alignItems: 'center'}}>
        <PressButton
          onPress={onSendReport}
          textColor="black"
          text={t('ReportProblem')}
          mode="TextButton"
          borderStatus={true}
        />
      </SafeAreaView>
    </>
  );
};

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
  })(ForgotPasswordScreenFormSecond),
);
