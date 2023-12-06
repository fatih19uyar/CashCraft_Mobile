import {RefreshControl, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import Background from '../components/Background';
import MoneyCard from '../components/MoneyCard';
import TopBar from '../components/TopBar';
import TransactionList from '../components/TransactionList';
import CampaignList from '../components/CampaignList';
import {Text} from 'react-native-paper';
import themes from '../utils/themes';
import styled from 'styled-components/native';
import {useTranslation} from 'react-i18next';
import {Campaign, TransactionData, WalletCardType} from '../types/type';
import walletCard from '../redux/slice/walletCardSlice';

type HomeScreenFormProps = {
  onProfile: () => void;
  goForm: (values: string) => void;
  refreshing: boolean;
  onRefresh: () => void;
  transactions: TransactionData[];
  campaings: Campaign[];
  walletCard: WalletCardType;
};
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
  const {t} = useTranslation();
  return (
    <>
      <Background imageSet={1}>
        <TopBar onProfileLogoPress={props.onProfile} />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={props.refreshing}
              onRefresh={props.onRefresh}
            />
          }>
          <MoneyCard walletCard={props.walletCard} />
          <TransactionList
            transactions={props.transactions}
            goForm={props.goForm}
          />
          <StyledView>
            <TouchableOpacity
              onPress={() => props.goForm('CampaignsScreen')}
              style={{
                flexDirection: 'row',
              }}>
              <StyledText>{t('Campaigns')}</StyledText>
            </TouchableOpacity>
          </StyledView>
          <CampaignList
            campaings={props.campaings}
            handleCardPress={() => props.goForm('CampaignsScreen')}
          />
        </ScrollView>
      </Background>
    </>
  );
};

export default HomeScreenForm;
