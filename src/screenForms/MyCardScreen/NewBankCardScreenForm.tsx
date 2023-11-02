import * as React from 'react';
import {
  Field,
  InjectedFormProps,
  formValueSelector,
  reduxForm,
} from 'redux-form';
import {ConnectedProps, connect} from 'react-redux';
import Input from '../../components/Input';
import colors from '../../utils/colors';
import TextView from '../../components/TextView';
import MyView from '../../components/MyView';
import themes from '../../utils/themes';
import ImageButton from '../../components/ImageButton';
interface IProps extends ConnectedProps<typeof connector> {
  goToNextForm: (values: any) => void;
}
const validate = (values: any) => {
  const errors: any = {};

  if (!values.cardName) {
    errors.cardName = 'Kart üzerinde yazan ismi giriniz.';
  }
  if (!values.cardNumber) {
    errors.cardNumber = 'Kart numarasını giriniz.';
  } else if (!/^\d+$/.test(values.cardNumber)) {
    errors.cardNumber = 'Sadece rakamlardan oluşmalıdır.';
  }
  if (!values.cardLastDate) {
    errors.cardLastDate = 'Son kullanım tarihini giriniz.';
  } else if (!/^([01]?[0-9]|2[0-3])\/\d{2}$/.test(values.cardLastDate)) {
    errors.cardLastDate = 'Geçerli bir tarih formatı giriniz (AA/YY).';
  } else {
    const [month, year] = values.cardLastDate.split('/');
    const currentYear = new Date().getFullYear() % 100; // Geçerli yılın son iki hanesi
    const currentMonth = new Date().getMonth() + 1; // Geçerli ay
    if (
      Number(year) < currentYear ||
      (Number(year) === currentYear && Number(month) < currentMonth)
    ) {
      errors.cardLastDate = 'Kartunuzun son kullanım tarihi geçmiş.';
    }
  }

  if (!values.cardSecurityCode) {
    errors.cardSecurityCode = 'Güvenlik kodunu giriniz.';
  }

  return errors;
};

const NewMyCardScreenForm: React.FC<IProps & InjectedFormProps<{}, IProps>> = ({
  handleSubmit,
  goToNextForm,
}) => (
  <>
    <MyView>
      <Field
        color={colors.inputTextBackground}
        name="cardName"
        component={Input}
        label="Kart Üzerinde Yazan İsim"
        secret={false}
        maxLength={50}
        defaultValue={''}
      />
      <Field
        color={colors.inputTextBackground}
        name="cardNumber"
        component={Input}
        label="Kart Numarası"
        secret={false}
        maxLength={16}
        defaultValue={''}
      />
      <Field
        color={colors.inputTextBackground}
        name="cardLastDate"
        component={Input}
        label="Son Kullanım Tarihi (AA/YY)"
        secret={false}
        maxLength={5}
        defaultValue={''}
      />
      <Field
        color={colors.inputTextBackground}
        name="cardCVV"
        component={Input}
        label="Kard CVV"
        secret={false}
        maxLength={3}
        defaultValue={''}
      />
      <Field
        color={colors.inputTextBackground}
        name="cardNickName"
        component={Input}
        label="Banka Kartına İsim Ver (Opsiyonel)"
        secret={false}
        maxLength={50}
        defaultValue={''}
      />
      <TextView
        style={{
          color: themes.light.colors.text,
          fontSize: themes.light.fontSize.small + 1,
          marginBottom: themes.light.textMargin.bottom.large,
          fontWeight: '300',
        }}>
        {
          'Kartınızı doğrulamak için 3D Secure sayfasına yönlendirileceksiniz. Kartınızdan 1 TL tutarında işlem gerçekleşecek ve anında iade edilecektir.'
        }
      </TextView>
      <ImageButton
        text="Yeni Banka Kartı Ekle"
        backColor={themes.light.colors.buttonPrimary}
        leftImageSource={require('../../assets/credit-card-add.png')}
        rightImageSource={''}
        onPress={handleSubmit(goToNextForm)}
        textColor={themes.light.colors.text1}
      />
    </MyView>
  </>
);

const selector = formValueSelector('newMyCardScreen');
const mapStateToProps = (state: any) => {
  const cardName = selector(state, 'cardName');
  const cardNumber = selector(state, 'cardNumber');
  const cardLastDate = selector(state, 'cardLastDate');
  const cardSecurityCode = selector(state, 'cardSecurityCode');
  const cardNickName = selector(state, 'cardNickName');
  const cardCVV = selector(state, 'cardCVV');
  return {
    cardName,
    cardNumber,
    cardLastDate,
    cardSecurityCode,
    cardNickName,
    cardCVV,
  };
};
const connector = connect(mapStateToProps);
export default connector(
  reduxForm<{}, IProps>({
    form: 'newMyCardScreen',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
  })(NewMyCardScreenForm),
);
