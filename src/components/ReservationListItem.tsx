import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import themes from '../utils/themes';
import {ReservationDetail} from '../types/type';

interface ReservationListItemProps {
  rezervetionsData: ReservationDetail[];
  onSeleceted: (reservation: ReservationDetail) => void;
}

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

const ReservationListItem: React.FC<ReservationListItemProps> = ({
  rezervetionsData,
  onSeleceted,
}) => {
  return (
    <ScrollView style={{width: '95%', marginTop: 10}}>
      {rezervetionsData.map((data, index) => (
        <TouchableOpacity key={index} onPress={() => onSeleceted(data)}>
          <ListItemContainer>
            <Thumbnail source={require('../assets/flight_icon.png')} />
            <TextContainer>
              <TitleText>{data.title}</TitleText>
              <SubtitleText>{data.description}</SubtitleText>
              <SubtitleText>{data.date}</SubtitleText>
            </TextContainer>
            <Thumbnail source={require('../assets/arrow_right.png')} />
          </ListItemContainer>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ReservationListItem;
