import React, {useState} from 'react';
import MyView from '../../components/MyView';
import themes from '../../utils/themes';
import ImageButton from '../../components/ImageButton';
import {CardData} from '../../types/type';
import CreditCardDisplay from 'react-native-credit-card-display';
import {View} from 'react-native';

interface IProps {
  goToNextForm: () => void;
  cardData: CardData;
}

const CardDetailsScreenForm: React.FC<IProps> = ({goToNextForm, cardData}) => {
  return (
    <MyView>
      <CreditCardDisplay
        number={cardData.cardNumber}
        cvc={123}
        expiration={cardData.cardExpiration}
        name={cardData.cardName}
        since={cardData.cardType}
      />
      <View style={{height: '10%'}} />
      <ImageButton
        text="Kart İsmini Güncelle"
        backColor={themes.light.colors.buttonBackground}
        leftImageSource={require('../../assets/edit.png')}
        onPress={goToNextForm}
        textColor={themes.light.colors.text}
        rightImageSource={undefined}
      />
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

export default CardDetailsScreenForm;
