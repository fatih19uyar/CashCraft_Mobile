import * as React from 'react';
import {
  Field,
  InjectedFormProps,
  formValueSelector,
  reduxForm,
} from 'redux-form';
import {connect} from 'react-redux';
import PasswordInput from '../../components/PasswordInput';
import PressButton from '../../components/PressButton';
import TextView from '../../components/TextView';
import {SafeAreaView} from 'react-native';
import MyView from '../../components/MyView';
import {useTranslation} from 'react-i18next';
import themes from '../../utils/themes';

type IProps = {
  goToNextForm: (values: any) => void;
  onForgotPassword: () => void;
  passWordClear: boolean;
};
const validate = (values: {password: string}) => {
  const errors: {password: string | null} = {password: null};
  if (!values.password) {
    errors.password = 'Bu alan boş bırakılamaz';
  } else if (values.password.length !== 6) {
    errors.password = 'Şifre 6 haneli olmalıdır';
  }
  return errors;
};

const PasswordInputField = ({input, meta, passWordClear}: any) => {
  return (
    <PasswordInput
      shouldReset={passWordClear}
      length={6}
      onChangePassword={input.onChange}
      meta={meta}
    />
  );
};

const LoginScreenFormSecond: React.FC<
  IProps & InjectedFormProps<{}, IProps>
> = ({handleSubmit, goToNextForm, onForgotPassword, passWordClear}) => {
  const {t} = useTranslation();

  return (
    <>
      <MyView>
        <TextView
          style={{
            color: themes.light.colors.text,
            fontSize: themes.light.fontSize.customeSize2,
            marginBottom: themes.light.textMargin.bottom.xLarge,
            marginTop: themes.light.textMargin.top.large,
            fontWeight: '500',
          }}>
          {t('LoginScreenFormSecondHeaderText')}
        </TextView>
        <Field
          name="password"
          component={PasswordInputField}
          passWordClear={passWordClear}
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
          onPress={onForgotPassword}
          textColor="black"
          text={t('ForgotPassword')}
          mode="TextButton"
          borderStatus={true}
        />
      </SafeAreaView>
    </>
  );
};

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
    validate,
  })(LoginScreenFormSecond),
);
