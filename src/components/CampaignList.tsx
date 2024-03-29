import React from 'react';
import {View, Image, Dimensions, ScrollView} from 'react-native';
import {Card} from 'react-native-paper';
import styled from 'styled-components/native';
import colors from '../utils/colors';
import TextView from './TextView';
import {Campaign} from '../types/type';
import themes from '../utils/themes';

interface CampaignListProps {
  handleCardPress?: (index: number) => void;
  campaings: Campaign[];
}

const CampaignList: React.FC<CampaignListProps> = ({
  handleCardPress,
  campaings,
}) => {
  const cardWidth = Dimensions.get('window').width * 0.3; // Ekran genişliğinin %30'u kadar bir kart genişliği
  const cardMargin = Dimensions.get('window').width * 0.02; // Ekran genişliğinin %2'si kadar bir kart kenar boşluğu

  return (
    <>
      {campaings ? (
        <StyledScrollView style={{height: '20%'}} horizontal>
          {campaings.map((campaign, index) => (
            <StyledCard
              key={index}
              style={{
                width: cardWidth,
                marginLeft: index === 0 ? cardMargin : 0, // İlk kartın sol kenar boşluğu
                marginRight: cardMargin, // Kartlar arası sağ kenar boşluğu
                height: 150,
              }}
              onPress={() =>
                handleCardPress ? handleCardPress(index) : () => {}
              }>
              <CardInnerWrapper>
                <StyledImage
                  style={{width: 40, height: 40, marginTop: 10}}
                  source={{uri: `data:image/jpeg;base64,${campaign.campImg}`}}
                />
                <TextView
                  style={{
                    color: themes.light.colors.text,
                    fontSize: themes.light.fontSize.medium,
                    marginTop: themes.light.textMargin.top.small,
                    fontWeight: 'bold',
                  }}>{`${campaign.campName}`}</TextView>
                <TextView
                  style={{
                    color: themes.light.colors.text,
                    fontSize: themes.light.fontSize.medium - 5,
                    fontWeight: '300',
                  }}>{`${campaign.campTitle}`}</TextView>
              </CardInnerWrapper>
            </StyledCard>
          ))}
        </StyledScrollView>
      ) : (
        <></>
      )}
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
