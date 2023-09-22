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
import colors from '../../utils/colors';
import Input from '../../components/Input';
import PhoneNumberInputWrapper from '../../components/PhoneNumberInputWrapper';
import CheckboxWithLabel from '../../components/CheckBox';
import themes from '../../utils/themes';
import {useTranslation} from 'react-i18next';

interface IProps extends ConnectedProps<typeof connector> {
  goNext: (values: any) => void;
  onReportProblem: () => void;
}

const validate = (values: any) => {
  const errors: any = {};

  if (!values.userName) {
    errors.userName = 'Ad boş olamaz';
  } else if (!/^[A-Za-z\s]+$/.test(values.userName)) {
    errors.userName = 'Geçersiz ad formatı';
  }

  if (!values.userSurname) {
    errors.userSurname = 'Soyad boş olamaz';
  } else if (!/^[A-Za-z\s]+$/.test(values.userSurname)) {
    errors.userSurname = 'Geçersiz soyad formatı';
  }
  return errors;
};

const RegisterScreenFormThird: React.FC<
  IProps & InjectedFormProps<{}, IProps>
> = ({handleSubmit, goNext}) => {
  const {t} = useTranslation();
  const sendData = (values: any) => {
    if (!values.userAgreement && !values.campAgreement) {
      setCheckBoxStatus({campAgreement: true, userAgreement: true});
    } else if (!values.campAgreement) {
      setCheckBoxStatus({...checkBoxStatus, campAgreement: true});
    } else if (!values.userAgreement) {
      setCheckBoxStatus({...checkBoxStatus, userAgreement: true});
    } else {
      goNext(values);
    }
  };

  const [checkBoxStatus, setCheckBoxStatus] = React.useState({
    userAgreement: false,
    campAgreement: false,
  });
  return (
    <>
      <TextView
        textColor={'black'}
        textSize={43}
        text={t('RegisterScreenFormThirdHeaderText')}
        textStyle={'500'}
        textMargin={{top: 0, bottom: 20}}
      />
      <Field
        color={colors.inputTextBackground}
        name="userName"
        component={Input}
        label={t('Name')}
        secret={false}
      />
      <Field
        color={colors.inputTextBackground}
        name="userSurname"
        component={Input}
        label={t('Surname')}
        secret={false}
      />
      <Field
        color={colors.inputTextBackground}
        name="phoneNumber"
        component={PhoneNumberInputWrapper}
        label={t('PhoneNumber')}
        secret={false}
      />
      <Field
        name="userAgreement"
        component={CheckboxWithLabel}
        label={t('UserAgreementText')}
        error={checkBoxStatus.userAgreement}
      />
      <Field
        name="campAgreement"
        component={CheckboxWithLabel}
        label={t('CampaingAgreementText')}
        error={checkBoxStatus.campAgreement}
      />
      <PressButton
        onPress={handleSubmit(sendData)}
        textColor={themes.light.colors.text1}
        text={t('Next')}
        mode="Button2"
        borderStatus={false}
      />
    </>
  );
};

const selector = formValueSelector('RegisterScreen');
const mapStateToProps = (state: any) => {
  const userName = selector(state, 'userName');
  const phoneNumber = selector(state, 'phoneNumber');
  const userSurname = selector(state, 'userSurname');
  const userAgreement = selector(state, 'userAgreement');
  const campAgreement = selector(state, 'campAgreement');
  return {
    userName,
    userSurname,
    phoneNumber,
    userAgreement,
    campAgreement,
  };
};
const connector = connect(mapStateToProps);
export default connector(
  reduxForm<{}, IProps>({
    form: 'RegisterScreen',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
  })(RegisterScreenFormThird),
);
