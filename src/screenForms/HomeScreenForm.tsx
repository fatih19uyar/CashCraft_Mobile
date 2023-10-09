import {TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import Background from '../components/Background';
import MoneyCard from '../components/MoneyCard';
import TopBar from '../components/TopBar';
import TransactionList from '../components/TransactionList';
import CampaignList from '../components/CampaignList';
import {Text} from 'react-native-paper';
import themes from '../utils/themes';
import styled from 'styled-components/native';
import {useTranslation} from 'react-i18next';

type HomeScreenFormProps = {
  onProfile: () => void;
  goForm: (values: string) => void;
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
            <StyledText>{t('Campaigns')}</StyledText>
          </TouchableOpacity>
        </StyledView>
        <CampaignList handleCardPress={campaingPress} />
      </Background>
    </>
  );
};

export default HomeScreenForm;
