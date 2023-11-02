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
import themes from '../../utils/themes';
import {useTranslation} from 'react-i18next';
interface IProps extends ConnectedProps<typeof connector> {
  goNext: (values: any) => void;
  onReportProblem: () => void;
}

const validate = (values: any) => {
  const errors: any = {};
  if (!values.email_create) {
    errors.email_create = 'Lütfen e-posta giriniz.';
  } else if (!isValidEmail(values.email_create)) {
    errors.email_create = 'Geçersiz e-posta formatı';
  }
  return errors;
};

const isValidEmail = (email_create: string) => {
  // Email format validation logic here
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email_create);
};

const RegisterScreenFormFirst: React.FC<
  IProps & InjectedFormProps<{}, IProps>
> = ({handleSubmit, goNext, onReportProblem}) => {
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
          {t('RegisterScreenFormFirstHeaderText')}
        </TextView>
        <Field
          color={colors.inputTextBackground}
          name="email_create"
          component={Input}
          label={t('EmailAdress')}
          secret={false}
        />
        <PressButton
          onPress={handleSubmit(goNext)}
          textColor={themes.light.colors.text1}
          text={t('Next')}
          mode="Button2"
          borderStatus={false}
        />
      </MyView>
      <SafeAreaView style={{justifyContent: 'space-between'}}>
        <PressButton
          onPress={onReportProblem}
          textColor="black"
          text={t('ReportProblem')}
          mode="TextButton"
          borderStatus={false}
        />
      </SafeAreaView>
    </>
  );
};

const selector = formValueSelector('RegisterScreen');
const mapStateToProps = (state: any) => {
  const email = selector(state, 'email_create');
  return {
    email,
  };
};
const connector = connect(mapStateToProps);
export default connector(
  reduxForm<{}, IProps>({
    form: 'RegisterScreen',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
  })(RegisterScreenFormFirst),
);
