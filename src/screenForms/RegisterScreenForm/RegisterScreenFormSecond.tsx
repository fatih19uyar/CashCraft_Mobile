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
import {useTranslation} from 'react-i18next';
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
> = ({handleSubmit, goNext, onReportProblem, email}) => {
  const {t} = useTranslation();
  return (
    <>
      <MyView>
        <TextView
          style={{
            color: themes.light.colors.text,
            fontSize: themes.light.fontSize.customeSize2 + 5,
            marginBottom: themes.light.textMargin.bottom.xLarge,
            marginTop: themes.light.textMargin.top.xLarge,
            fontWeight: '500',
          }}>
          {t('RegisterScreenFormSecondHeaderText')}
        </TextView>
        <TextView
          style={{
            color: themes.light.colors.text,
            fontSize: themes.light.fontSize.large - 2,
            marginBottom: themes.light.textMargin.bottom.xLarge,
          }}>
          {email + t('RegisterScreenFormSecondText')}
        </TextView>
        <Field name="verificationCode" component={PasswordInputField} />
        <PressButton
          onPress={handleSubmit(goNext)}
          textColor={themes.light.colors.text1}
          text={t('Next')}
          mode="Button2"
          borderStatus={false}
        />
      </MyView>
      <SafeAreaView style={{alignItems: 'center'}}>
        <PressButton
          onPress={onReportProblem}
          textColor="black"
          text={t('ReportProblem')}
          mode="TextButton"
          borderStatus={true}
        />
      </SafeAreaView>
    </>
  );
};

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
