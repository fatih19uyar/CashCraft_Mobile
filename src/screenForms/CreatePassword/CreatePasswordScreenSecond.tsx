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
import {useTranslation} from 'react-i18next';
import themes from '../../utils/themes';
interface IProps extends ConnectedProps<typeof connector> {
  goScreen: (values: any) => void;
}
const PasswordInputField = ({input}: any) => {
  return <PasswordInput length={6} onChangePassword={input.onChange} />;
};
const CreatePasswordScreenSecond: React.FC<
  IProps & InjectedFormProps<{}, IProps>
> = ({handleSubmit, goScreen}) => {
  const {t} = useTranslation();
  return (
    <>
      <TextView
        style={{
          color: themes.light.colors.text,
          fontSize: themes.light.fontSize.customeSize1,
          marginBottom: themes.light.textMargin.bottom.xLarge,
          marginTop: themes.light.textMargin.top.large,
          fontWeight: '500',
        }}>
        {t('CreatePasswordScreenSecondHeaderText')}
      </TextView>
      <TextView
        style={{
          color: themes.light.colors.text,
          fontSize: themes.light.fontSize.medium + 2,
          fontWeight: 'normal',
        }}>
        {t('CreatePasswordScreenSecondText')}
      </TextView>
      <Field name="reCreatePassword" component={PasswordInputField} />
      <PressButton
        onPress={handleSubmit(goScreen)}
        textColor="white"
        text={t('Next')}
        mode="Button2"
        borderStatus={false}
      />
    </>
  );
};

const selector = formValueSelector('createPassword');
const mapStateToProps = (state: any) => {
  const password = selector(state, 'reCreatePassword');
  return {
    password,
  };
};
const connector = connect(mapStateToProps);
export default connector(
  reduxForm<{}, IProps>({
    form: 'createPassword',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
  })(CreatePasswordScreenSecond),
);
