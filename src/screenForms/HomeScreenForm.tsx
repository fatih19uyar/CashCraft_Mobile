import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Background from '../components/Background';
import MoneyCard from '../components/MoneyCard';
import TopBar from '../components/TopBar';
import TransactionList from '../components/TransactionList';
import CampaignList from '../components/CampaignList';
import {campaigns} from '../values/values';
import {Text} from 'react-native-paper';
import themes from '../utils/themes';
import styled from 'styled-components/native';
import ButtonModal from '../components/ProfileMenu';

type HomeScreenFormProps = {
  onProfile: () => void;
  goForm: (values: string) => void;
};
const transactions = [
  {name: 'Alışveriş', amount: 150, date: '2023-07-30'},
  {name: 'Fatura Ödeme', amount: 200, date: '2023-07-29'},
  {name: 'Transfer', amount: -50, date: '2023-07-28'},
];
const StyledView = styled.View`
  align-self: flex-start;
  padding: ${themes.light.spacing.medium}px;
`;

const StyledText = styled(Text)`
  font-weight: bold;
  font-size: 12px;
  margin-left: ${themes.light.spacing.medium}px;
`;
const HomeScreenForm = (props: HomeScreenFormProps) => {
  const campaingPress = (index: number) => {
    console.log('index', index);
  };
  return (
    <>
      <Background imageSet={1}>
        <TopBar onProfileLogoPress={props.onProfile} />
        <MoneyCard amount={'10.000,59'} accountName={'idv'} />
        <TransactionList goForm={props.goForm} />
        <StyledView>
          <TouchableOpacity
            onPress={() => props.goForm('CampaignsScreen')}
            style={{
              flexDirection: 'row',
            }}>
            <StyledText>Kampanya</StyledText>
          </TouchableOpacity>
        </StyledView>
        <CampaignList campaigns={campaigns} handleCardPress={campaingPress} />
      </Background>
    </>
  );
};

export default HomeScreenForm;
