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
        textColor={'black'}
        textSize={45}
        text={t('CreatePasswordScreenSecondHeaderText')}
        textStyle={'500'}
        textMargin={{top: 20, bottom: 50}}
      />
      <TextView
        textColor={'black'}
        textSize={18}
        text={t('CreatePasswordScreenSecondText')}
        textStyle={'normal'}
        textMargin={{top: 0, bottom: 0}}
      />
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
