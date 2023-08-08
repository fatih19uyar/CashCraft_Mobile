import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import colors from '../utils/colors';
import TextView from './TextView';

interface Campaign {
  campName: string;
  campImg: string;
  campDetails: string;
}

interface CampaignListProps {
  campaigns: Campaign[];
}

const height = 200;

const getWidth = () => {
  const { width } = Dimensions.get('window');
  return width; // Ekranın yatay çözünürlüğünün %90'ini hesapla
};

const CampaignList: React.FC<CampaignListProps> = ({ campaigns }) => {
  return (
    <CardContainer>
      {campaigns.map((campaign, index) => (
        <StyledCard key={index}>
          <ViewContainer>
            <CardContent>
              <StyledTextView
                textColor={'black'}
                textSize={getWidth() > 380 ? 10 : 22}
                text={`${campaign.campName}`}
                textStyle={'bold'}
                textMargin={{ top: 0, bottom: 0 }}
              />
              <StyledImage
                source={require('../assets/campaign.png')}
                resizeMode="contain"
              />
              <StyledTextView
                textColor={'black'}
                textSize={12}
                text={`${campaign.campDetails}`}
                textStyle={'500'}
                textMargin={{ top: 5, bottom: 0 }}
              />
            </CardContent>
          </ViewContainer>
        </StyledCard>
      ))}
    </CardContainer>
  );
};

const StyledCard = styled(Card)`
  width: 100%;
  height: ${height}px;
  border-width: 1px;
  border-radius: 5px;
  border-top-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 10px;
  border-color: ${colors.buttonPrimary};
  margin-horizontal: 5px;
`;

const CardContent = styled(Card.Content)`
  height: 100%;
`;

const StyledImage = styled(Image)`
  width: 40px;
  height: 40px;
  margin-left: 10px;
`;

const StyledTextView = styled(TextView)`
  font-size: ${({ theme }) => theme.textSize}px;
`;

const ViewContainer = styled(View)`
  height: ${height - 50}px;
  margin-vertical: 5px;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled(View)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;

export default CampaignList;
