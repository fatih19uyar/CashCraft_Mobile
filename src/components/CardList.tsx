import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import themes from '../utils/themes';
import {CardData, CardStyle} from '../types/type';

interface CardListProps {
  cardData: CardData[];
  onItemPress: (data: CardData) => void;
  cardStyle: CardStyle;
}

const ListItemContainer = styled.View<{type: string}>`
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

const CardList: React.FC<CardListProps> = ({
  cardData,
  cardStyle,
  onItemPress,
}) => {
  return (
    <ScrollView style={{width: '95%', marginTop: 10}}>
      {cardData.map((data, index) => {
        if (data.cardStyle === cardStyle) {
          return (
            <ListItemContainer key={index}>
              {data.cardType === 'master' ? (
                <Thumbnail source={require('../assets/mastercard.png')} />
              ) : (
                <Thumbnail source={require('../assets/visa.png')} />
              )}
              <TextContainer>
                <TitleText>
                  {data.cardNickName == '' ? data.cardName : data.cardNickName}
                </TitleText>
                <SubtitleText>{data.cardNumber}</SubtitleText>
                <SubtitleText>{data.cardExpiration}</SubtitleText>
              </TextContainer>
              <TouchableOpacity onPress={() => onItemPress(data)}>
                <Thumbnail source={require('../assets/arrow_right.png')} />
              </TouchableOpacity>
            </ListItemContainer>
          );
        } else {
          return <></>; // Eşleşmeyen kartlar için null döner
        }
      })}
    </ScrollView>
  );
};

export default CardList;
