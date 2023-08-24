import React from 'react';
import MyView from '../../components/MyView';
import {styled} from 'styled-components/native';
import {Text} from 'react-native-paper';
import {PaymentDetails} from '../../types/type';
import themes from '../../utils/themes';
import TextView from '../../components/TextView';
import {Image, TouchableOpacity, View} from 'react-native';
import ImageButton from '../../components/ImageButton';

interface QRPayNowScreenFormProps {
  goNext: () => void;
  readPayment: PaymentDetails;
  addNewCard: () => void;
}
const SelectPaymentTypeForm: React.FC<QRPayNowScreenFormProps> = ({
  goNext,
  addNewCard,
  readPayment,
}) => {
  const buttonData = [
    {
      text: 'Banka Kartı ile Öde',
      onPress: 'bankCard',
    },
    {
      text: 'Kredi Kartı ile Öde',
      onPress: 'creditCard',
    },
    {
      text: 'Cüzdan Hesabı ile Öde',
      onPress: 'walletCard',
    },
    {
      text: 'Diğer Kartlar ile Öde',
      onPress: 'anotherCard',
    },
  ];
  const paymentDetails = () => {
    return (
      <ListItemContainer>
        <Thumbnail source={require('../../assets/payment_details_right.png')} />
        <TextContainer>
          <TitleText>Firma Adı</TitleText>
          <SubtitleText>{readPayment.companyName}</SubtitleText>
        </TextContainer>
        <TextContainer>
          <TitleText>Miktar</TitleText>
          <SubtitleText>{readPayment.price} TL</SubtitleText>
        </TextContainer>
      </ListItemContainer>
    );
  };
  const buttonFunc = () => {
    return (
      <>
        {buttonData.map((button, index) => (
          <ImageButton
            key={index}
            text={button.text}
            backColor={themes.light.colors.buttonBackground}
            leftImageSource={''}
            rightImageSource={require('../../assets/arrow_right.png')}
            onPress={() => {}}
            textColor={themes.light.colors.text}
          />
        ))}
      </>
    );
  };
  return (
    <>
      <MyView>
        {paymentDetails()}
        <Text>Kalan Süre: 00:00</Text>
        <RowTextContaier>
          <TextView
            textColor={themes.light.colors.text}
            textSize={15}
            text={'ÖDEME YÖNTEMLERİ'}
            textStyle={'500'}
            textMargin={{top: 10, bottom: 5}}
          />
          <View style={{flex: 1}} />
          <TouchableOpacity onPress={addNewCard} style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/add_icon.png')}
              style={{width: 25, height: 25, marginTop: 13, marginBottom: 5}}
            />
            <TextView
              textColor={themes.light.colors.text}
              textSize={15}
              text={'Kart Ekle'}
              textStyle={'400'}
              textMargin={{top: 10, bottom: 5}}
            />
          </TouchableOpacity>
        </RowTextContaier>
        {buttonFunc()}
      </MyView>
    </>
  );
};

const ListItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid ${themes.light.colors.buttonBorderColor};
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  background-color: ${themes.light.colors.background};
  margin-top: 20px;
`;
const RowTextContaier = styled.View`
  flex-direction: row;
  align-items: left;
  margin-top: 10px;
`;
const Thumbnail = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

const TextContainer = styled.View`
  flex: 1;
`;

const TitleText = styled.Text`
  font-weight: bold;
  margin-bottom: 5px;
`;

const SubtitleText = styled.Text`
  color: gray;
`;
export default SelectPaymentTypeForm;
