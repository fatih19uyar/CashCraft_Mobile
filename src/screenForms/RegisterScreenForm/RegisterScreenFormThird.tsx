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
import colors from '../../utils/colors';
import Input from '../../components/Input';
import Checkbox from '../../components/CheckBox';
import PhoneInput from 'react-native-phone-number-input';
import renderPhoneInput from '../../components/PhoneNumberInput';

interface IProps extends ConnectedProps<typeof connector> {
  goNext: (values: any) => void;
  onReportProblem: () => void;
}

const RegisterScreenFormThird: React.FC<
  IProps & InjectedFormProps<{}, IProps>
> = ({handleSubmit, goNext, onReportProblem}) => {
  const [isChecked, setIsChecked] = React.useState(false);
  const [isChecked2, setIsChecked2] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };
  return (
    <>
      <Background>
        <TextView
          textColor={'black'}
          textSize={43}
          text={'Kişisel Bilgileri Giriniz'}
          textStyle={'500'}
          textMargin={{top: 0, bottom: 100}}
        />
        <Field
          color={colors.inputTextBackground}
          name="userName"
          component={Input}
          label="Ad"
          secret={false}
        />
        <Field
          color={colors.inputTextBackground}
          name="userSurname"
          component={Input}
          label="Soyad"
          secret={false}
        />
        <Field
          color={colors.inputTextBackground}
          name="phoneNumber"
          component={renderPhoneInput} // Use PhoneNumberInput here
          label="Cep Telefonu Numarası"
          secret={false}
        />
        <Checkbox
          checked={isChecked}
          label="Kullanıcı Sözleşmesi’ni ve Gizlilik Politikası’nı kabul ediyorum."
          onChange={handleCheckboxChange}
        />
        <Checkbox
          checked={isChecked2}
          label="Kampanyalardan ve gelişmelerden haberdar olmak istiyorum."
          onChange={handleCheckboxChange2}
        />
        <PressButton
          onPress={handleSubmit(goNext)}
          textColor=""
          text="Devam Et"
          mode="Button2"
        />
      </Background>
    </>
  );
};

const selector = formValueSelector('RegisterScreen');
const mapStateToProps = (state: any) => {
  const userName = selector(state, 'userName');
  const phoneNumber = selector(state, 'phoneNumber');
  const userSurname = selector(state, 'userSurname');
  return {
    userName,
    userSurname,
    phoneNumber,
  };
};
const connector = connect(mapStateToProps);
export default connector(
  reduxForm<{}, IProps>({
    form: 'RegisterScreen',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
  })(RegisterScreenFormThird),
);
