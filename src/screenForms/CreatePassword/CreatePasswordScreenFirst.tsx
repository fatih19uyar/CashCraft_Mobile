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
import PasswordInput from '../../components/PasswordInput';
interface IProps extends ConnectedProps<typeof connector> {
  goToNextForm: (values: any) => void;
}
const PasswordInputField = ({input}: any) => {
  return <PasswordInput length={6} onChangePassword={input.onChange} />;
};
const CreatePasswordScreenFirst: React.FC<
  IProps & InjectedFormProps<{}, IProps>
> = ({handleSubmit, goToNextForm}) => (
  <>
    <Background imageSet={2}>
      <TextView
        textColor={'black'}
        textSize={39}
        text={'6 Haneli Şifre Oluştur'}
        textStyle={'500'}
        textMargin={{top: 20, bottom: 50}}
      />
      <TextView
        textColor={'black'}
        textSize={18}
        text={'Şifreniz yalnızca rakamlardan oluşmalıdır.'}
        textStyle={'normal'}
        textMargin={{top: 0, bottom: 0}}
      />
      <Field name="createPassword" component={PasswordInputField} />
      <PressButton
        onPress={handleSubmit(goToNextForm)}
        textColor=""
        text="Devam Et"
        mode="Button2"
      />
    </Background>
  </>
);

const selector = formValueSelector('createPassword');
const mapStateToProps = (state: any) => {
  const password = selector(state, 'password');
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
  })(CreatePasswordScreenFirst),
);
