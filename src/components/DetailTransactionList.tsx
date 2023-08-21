import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import themes from '../utils/themes';
import {transactionData} from '../values/values';

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

const DetailTransactionList = () => {
  return (
    <ScrollView style={{width: '95%'}}>
      {transactionData.map((data, index) => (
        <ListItemContainer key={index}>
          <Thumbnail source={require('../assets/user-sharing.png')} />
          <TextContainer>
            <TitleText>{data.title}</TitleText>
            <SubtitleText>{data.subtitle}</SubtitleText>
            <SubtitleText>{data.time}</SubtitleText>
          </TextContainer>
          <Text style={{fontWeight: 'bold'}}>{data.rightTitle}</Text>
        </ListItemContainer>
      ))}
    </ScrollView>
  );
};

export default DetailTransactionList;
