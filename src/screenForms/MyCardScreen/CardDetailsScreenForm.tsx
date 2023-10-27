import React from 'react';
import MyView from '../../components/MyView';
import themes from '../../utils/themes';
import ImageButton from '../../components/ImageButton';
import {CardData} from '../../types/type';
import CreditCardDisplay from 'react-native-credit-card-display';
import {View} from 'react-native';
import TextView from '../../components/TextView';
import Input from '../../components/Input';
import colors from '../../utils/colors';
import {
  Field,
  InjectedFormProps,
  formValueSelector,
  reduxForm,
} from 'redux-form';
import {connect} from 'react-redux';

interface IProps {
  goToNextForm: () => void;
  cardData: CardData | null;
  goUpdateNickName: (values: any) => void;
  visibleUpdateNickName: boolean;
}

const CardDetailsScreenForm: React.FC<
  IProps & InjectedFormProps<{}, IProps>
> = ({
  goToNextForm,
  cardData,
  goUpdateNickName,
  visibleUpdateNickName,
  handleSubmit,
}) => {
  return (
    <MyView>
      <ImageButton
        text="Kart İsmini Güncelle"
        backColor={themes.light.colors.buttonBackground}
        leftImageSource={require('../../assets/edit.png')}
        onPress={
          visibleUpdateNickName
            ? handleSubmit(goUpdateNickName)
            : goUpdateNickName
        }
        textColor={themes.light.colors.text}
        rightImageSource={undefined}
      />
      {visibleUpdateNickName ? (
        <Field
          color={colors.inputTextBackground}
          name="nickName"
          component={Input}
          label="Kart İsmi"
          secret={false}
          maxLength={50}
        />
      ) : (
        <></>
      )}
      <TextView
        textColor={'black'}
        textSize={20}
        text={cardData?.cardNickName}
        textStyle={'bold'}
        textMargin={{top: 0, bottom: 20}}
      />
      <CreditCardDisplay
        number={cardData?.cardNumber}
        cvc={123}
        expiration={cardData?.cardExpiration}
        name={cardData?.cardName}
        since={cardData?.cardType}
      />
      <View style={{height: '10%'}} />

      <ImageButton
        text="Banka Kartını Sil"
        backColor={themes.light.colors.buttonFourth}
        leftImageSource={require('../../assets/delete.png')}
        onPress={goToNextForm}
        textColor={themes.light.colors.text1}
        rightImageSource={undefined}
      />
    </MyView>
  );
};
const selector = formValueSelector('CardDetailsScreenForm');
const mapStateToProps = (state: any) => {
  const nickName = selector(state, 'nickName');
  return {
    nickName,
  };
};
const connector = connect(mapStateToProps);
export default connector(
  reduxForm<{}, IProps>({
    form: 'CardDetailsScreenForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
  })(CardDetailsScreenForm),
);
