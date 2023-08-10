import React from 'react';
import {View, Image, Dimensions, ScrollView} from 'react-native';
import {Card, Text} from 'react-native-paper';
import styled from 'styled-components/native';
import colors from '../utils/colors';
import TextView from './TextView';
import {Campaign} from '../types/type';

interface CampaignListProps {
  campaigns: Campaign[];
}

const getWidth = () => {
  const {width} = Dimensions.get('window');
  return width; // Ekranın yatay çözünürlüğünün %90'ini hesapla
};

const CampaignList: React.FC<CampaignListProps> = ({campaigns}) => {
  return (
    <>
      <StyledScrollView horizontal>
        {campaigns.map((campaign, index) => (
          <StyledCard key={index}>
            <StyledTextView
              textColor={'black'}
              textSize={getWidth() > 380 ? 10 : 22}
              text={`${campaign.campName}`}
              textStyle={'bold'}
              textMargin={{top: 0, bottom: 0}}
            />
            <StyledTextView
              textColor={'black'}
              textSize={12}
              text={`${campaign.campDetails}`}
              textStyle={'500'}
              textMargin={{top: 5, bottom: 0}}
            />
          </StyledCard>
        ))}
      </StyledScrollView>
    </>
  );
};

const StyledCard = styled(Card)`
  width: 28%;
  height: 95%;
  border-width: ${({theme}) => theme.border.small}px;
  border-radius: ${({theme}) => theme.radius.large}px;
  border-bottom-width: ${({theme}) => theme.border.extraLarge}px;
  border-color: ${colors.buttonPrimary};
  justify-content: center;
  margin-horizontal: ${({theme}) => theme.itemMargin.small}px;
`;
const StyledScrollView = styled(ScrollView)`
  flex-direction: row;
  padding: 3px;
`;
const StyledImage = styled(Image)`
  width: 40px;
  height: 40px;
`;

const StyledTextView = styled(TextView)`
  font-size: ${({theme}) => theme.textSize}px;
`;

const StyledText = styled(Text)`
  font-weight: bold;
  text-align: left;
`;

export default CampaignList;
