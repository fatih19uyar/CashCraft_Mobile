import React from 'react';
import {View, Image, Dimensions, ScrollView} from 'react-native';
import {Card} from 'react-native-paper';
import styled from 'styled-components/native';
import colors from '../utils/colors';
import TextView from './TextView';
import {Campaign} from '../types/type';
import {ImagesData} from '../assets/ImageManager';

interface CampaignListProps {
  campaigns: Campaign[];
  handleCardPress: (index: number) => void;
}

const CampaignList: React.FC<CampaignListProps> = ({
  campaigns,
  handleCardPress,
}) => {
  const cardWidth = Dimensions.get('window').width * 0.3; // Ekran genişliğinin %30'u kadar bir kart genişliği
  const cardMargin = Dimensions.get('window').width * 0.02; // Ekran genişliğinin %2'si kadar bir kart kenar boşluğu

  return (
    <>
      <StyledScrollView style={{height: '20%'}} horizontal>
        {campaigns.map((campaign, index) => (
          <StyledCard
            key={index}
            style={{
              width: cardWidth,
              marginLeft: index === 0 ? cardMargin : 0, // İlk kartın sol kenar boşluğu
              marginRight: cardMargin, // Kartlar arası sağ kenar boşluğu
              height: 150,
            }}
            onPress={() => handleCardPress(index)} // onPress eventini handleCardPress fonksiyonu ile yönlendiriyoruz
          >
            <CardInnerWrapper>
              <StyledImage
                style={{width: 40, height: 40}}
                source={campaign.campImg} // require ile dosya yolu kullanma
              />
              <TextView
                textColor={'black'}
                textSize={15}
                text={`${campaign.campName}`}
                textStyle={'bold'}
                textMargin={{top: 5, bottom: 0}}
              />
              <TextView
                textColor={'black'}
                textSize={12}
                text={`${campaign.campTitle}`}
                textStyle={'300'}
                textMargin={{top: 5, bottom: 0}}
              />
            </CardInnerWrapper>
          </StyledCard>
        ))}
      </StyledScrollView>
    </>
  );
};

const StyledCard = styled(Card)`
  border-width: ${({theme}) => theme.border.small}px;
  border-radius: ${({theme}) => theme.radius.large}px;
  border-bottom-width: ${({theme}) => theme.border.extraLarge}px;
  border-color: ${colors.buttonPrimary};
`;
const StyledScrollView = styled(ScrollView)`
  flex-direction: row;
  padding: 3px;
`;
const CardInnerWrapper = styled(View)`
  padding: 5px;
  align-items: center;
  justify-content: center;
`;
const StyledImage = styled(Image)`
  width: 40px;
  height: 40px;
`;

export default CampaignList;
