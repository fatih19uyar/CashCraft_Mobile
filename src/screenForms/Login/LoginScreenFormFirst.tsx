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
import TextView from '../../components/TextView';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyView from '../../components/MyView';
import {useTranslation} from 'react-i18next';
import themes from '../../utils/themes';
interface IProps extends ConnectedProps<typeof connector> {
  goToNextForm: (values: any) => void;
  onReportProblem: () => void;
}

const validate = (values: any) => {
  const errors: any = {};
  if (!values.email) {
    errors.email = 'Lütfen e-posta giriniz.';
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Geçersiz e-posta formatı';
  }
  return errors;
};

const isValidEmail = (email: string) => {
  // Email format validation logic here
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const LoginScreenFormFirst: React.FC<
  IProps & InjectedFormProps<{}, IProps>
> = ({handleSubmit, goToNextForm, onReportProblem}) => {
  const {t} = useTranslation();
  return (
    <>
      <MyView>
        <TextView
          style={{
            color: themes.light.colors.text,
            fontSize: themes.light.fontSize.customeSize2,
            marginBottom: themes.light.textMargin.bottom.extraLarge,
            fontWeight: '500',
          }}>
          {t('onLogin')}
        </TextView>
        <Field
          color={colors.inputTextBackground}
          name="email"
          component={Input}
          label={t('EmailAdress')}
          secret={false}
        />
        <PressButton
          onPress={handleSubmit(goToNextForm)}
          textColor="white"
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
