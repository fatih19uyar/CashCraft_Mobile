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
import {SafeAreaView} from 'react-native-safe-area-context';
import MyView from '../../components/MyView';
import {View} from 'react-native';
import themes from '../../utils/themes';
import ImageButton from '../../components/ImageButton';
import {TextInput} from 'react-native-paper';
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
      />
      <Field
        color={colors.inputTextBackground}
        name="cardNumber"
        component={Input}
        label="Kart Numarası"
        secret={false}
      />
      <View style={{flexDirection: 'row'}}>
        <Field
          color={colors.inputTextBackground}
          name="cardLastDate"
          component={Input}
          label="Son Kullanım Tarihi (AA/YY)"
          secret={false}
        />
      </View>
      <Field
        color={colors.inputTextBackground}
        name="cardNickName"
        component={Input}
        label="Banka Kartına İsim Ver (Opsiyonel)"
        secret={false}
      />
      <TextView
        textColor={'black'}
        textSize={13}
        text={
          'Kartınızı doğrulamak için 3D Secure sayfasına yönlendirileceksiniz. Kartınızdan 1 TL tutarında işlem gerçekleşecek ve anında iade edilecektir.'
        }
        textStyle={'300'}
        textMargin={{top: 0, bottom: 0}}
      />
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
  return {
    cardName,
    cardNumber,
    cardLastDate,
    cardSecurityCode,
    cardNickName,
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
