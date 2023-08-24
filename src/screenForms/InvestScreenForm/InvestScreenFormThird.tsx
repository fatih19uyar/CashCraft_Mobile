import {View, Text} from 'react-native';
import React from 'react';
import {styled} from 'styled-components/native';
import themes from '../../utils/themes';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CardData} from '../../types/type';
import PressButton from '../../components/PressButton';
import MyView from '../../components/MyView';
import TextView from '../../components/TextView';
interface InvestScreenFormThirdProps {
  goNextForm: () => void;
  cardData: CardData | undefined;
  credit: string;
}

const InvestScreenFormThird: React.FC<InvestScreenFormThirdProps> = ({
  goNextForm,
  cardData,
  credit,
}) => {
  return (
    <MyView>
      <TextView
        textColor={'black'}
        textSize={14}
        text={
          'Cüzdan hesabına para yatırma işlemini tamamlanamdan önce bilgilerinizi kontrol ediniz.'
        }
        textStyle={'300'}
        textMargin={{top: 0, bottom: 60}}
      />
      <ListItemContainer>
        {cardData?.cardType === 'master' ? (
          <Thumbnail source={require('../../assets/mastercard.png')} />
        ) : (
          <Thumbnail source={require('../../assets/visa.png')} />
        )}
        <TextContainer>
          <TitleText>{cardData?.cardName}</TitleText>
          <SubtitleText>{cardData?.cardNumber}</SubtitleText>
          <SubtitleText>{cardData?.cardExpiration}</SubtitleText>
        </TextContainer>
      </ListItemContainer>
      <ListItemContainer>
        <TextContainer>
          <TitleText>Yatırılacak Tutar</TitleText>
          <SubtitleText>{credit} TL</SubtitleText>
        </TextContainer>
      </ListItemContainer>
      <ListItemContainer>
        <TextContainer>
          <TitleText>İşlem Ücreti</TitleText>
          <SubtitleText>{parseFloat(credit) / 10} TL</SubtitleText>
        </TextContainer>
      </ListItemContainer>
      <ListItemContainer>
        <TextContainer>
          <TitleText>Karttan Çekilecek Tutar</TitleText>
          <SubtitleText>
            {parseFloat(credit) / 10 + parseFloat(credit)} TL
          </SubtitleText>
        </TextContainer>
      </ListItemContainer>
      <PressButton
        onPress={goNextForm}
        textColor="white"
        text="Devam Et"
        mode="Button2"
        borderStatus={false}
      />
    </MyView>
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
`;

const Thumbnail = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 10px;
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

export default InvestScreenFormThird;
