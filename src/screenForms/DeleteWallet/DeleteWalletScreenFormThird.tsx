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
import MyView from '../../components/MyView';
import {HelperText, Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
interface IProps extends ConnectedProps<typeof connector> {
  goNext: (values: any) => void;
  goBack: () => void;
}
const PasswordInputField = ({input, meta}: any) => {
  return (
    <>
      <PasswordInput length={6} onChangePassword={input.onChange} />
      {meta.error && (
        <HelperText style={{color: 'red'}} type="error">
          {meta.error}
        </HelperText>
      )}
    </>
  );
};
const validate = (values: any) => {
  const errors: any = {};
  if (!values.rePassword) {
    errors.rePassword = 'Lütfen boş bırakmayın.';
  } else if (values.rePassword !== values.password) {
    errors.rePassword = 'Şifreler uyuşmuyor.';
  }
  if (!values.password) {
    errors.password = 'Lütfen şifre girin.';
  }
  return errors;
};
const DeleteWalletScreenFormThird: React.FC<
  IProps & InjectedFormProps<{}, IProps>
> = ({handleSubmit, goNext, goBack}) => {
  const {t} = useTranslation();
  return (
    <>
      <MyView>
        <TextView
          textColor={'black'}
          textSize={39}
          text={t('DeleteWalletScreenFormThirdHeaderText')}
          textStyle={'500'}
          textMargin={{top: 20, bottom: 50}}
        />
        <Field name="rePassword" component={PasswordInputField} />
        <PressButton
          onPress={handleSubmit(goNext)}
          textColor="white"
          text={t('Next')}
          mode="Button4"
          borderStatus={false}
        />
        <PressButton
          onPress={goBack}
          textColor="white"
          text={t('GiveUp')}
          mode="Button2"
          borderStatus={false}
        />
      </MyView>
    </>
  );
};

const selector = formValueSelector('deleteWalletScreen');
const mapStateToProps = (state: any) => {
  const rePassword = selector(state, 'rePassword');
  return {
    rePassword,
  };
};
const connector = connect(mapStateToProps);
export default connector(
  reduxForm<{}, IProps>({
    form: 'deleteWalletScreen',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
  })(DeleteWalletScreenFormThird),
);
