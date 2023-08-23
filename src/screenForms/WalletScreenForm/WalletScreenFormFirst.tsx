import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImageButton from '../../components/ImageButton';
import themes from '../../utils/themes';
import MyView from '../../components/MyView';
import {styled} from 'styled-components/native';
import {Card} from 'react-native-paper';
import colors from '../../utils/colors';
import TextView from '../../components/TextView';

type Props = {
  goScreen: (screenName: string) => void; // goScreen prop'unu tanımladık
};

const WalletScreenFormFirst: React.FC<Props> = props => {
  const cardWidth = Dimensions.get('window').width * 0.3; // Ekran genişliğinin %30'u kadar bir kart genişliği
  const cardMargin = Dimensions.get('window').width * 0.02; // Ekran genişliğinin %2'si kadar bir kart kenar boşluğu
  return (
    <>
      <MyView>
        <StyledView>
          <StyledCard
            key={0}
            style={{
              width: cardWidth,
              marginLeft: 0 === 0 ? cardMargin : 0, // İlk kartın sol kenar boşluğu
              marginRight: cardMargin, // Kartlar arası sağ kenar boşluğu
              height: 150,
            }}
            onPress={() => props.goScreen('MyMyCardScreen')} // onPress eventini handleCardPress fonksiyonu ile yönlendiriyoruz
          >
            <CardInnerWrapper>
              <TextView
                textColor={'black'}
                textSize={15}
                text={`Banka Kartılarım`}
                textStyle={'bold'}
                textMargin={{top: 5, bottom: 0}}
              />
              <StyledImage source={require('../../assets/visa.png')} />
            </CardInnerWrapper>
          </StyledCard>
          <StyledCard
            key={1}
            style={{
              width: cardWidth,
              marginLeft: 0 === 0 ? cardMargin : 0, // İlk kartın sol kenar boşluğu
              marginRight: cardMargin, // Kartlar arası sağ kenar boşluğu
              height: 150,
            }}
            onPress={() => props.goScreen('CreditCardScreen')} // onPress eventini handleCardPress fonksiyonu ile yönlendiriyoruz
          >
            <CardInnerWrapper>
              <TextView
                textColor={'black'}
                textSize={15}
                text={`Kredi Kartılarım`}
                textStyle={'bold'}
                textMargin={{top: 5, bottom: 0}}
              />
              <StyledImage source={require('../../assets/visa.png')} />
            </CardInnerWrapper>
          </StyledCard>
        </StyledView>
        <StyledView>
          <StyledCard
            key={0}
            style={{
              width: cardWidth,
              marginLeft: 0 === 0 ? cardMargin : 0,
              marginRight: cardMargin,
              height: 150,
            }}
            onPress={() => props.goScreen('MyMyCardScreen')}>
            <CardInnerWrapper>
              <TextView
                textColor={'black'}
                textSize={15}
                text={`Mağaza Kartılarım`}
                textStyle={'bold'}
                textMargin={{top: 5, bottom: 0}}
              />
              <StyledImage source={require('../../assets/mastercard.png')} />
            </CardInnerWrapper>
          </StyledCard>
          <StyledCard
            key={1}
            style={{
              width: cardWidth,
              marginLeft: 0 === 0 ? cardMargin : 0,
              marginRight: cardMargin,
              height: 150,
            }}
            onPress={() => props.goScreen('MyMyCardScreen')}>
            <CardInnerWrapper>
              <TextView
                textColor={'black'}
                textSize={15}
                text={`Hediye Kartılarım`}
                textStyle={'bold'}
                textMargin={{top: 5, bottom: 0}}
              />
              <StyledImage source={require('../../assets/visa.png')} />
            </CardInnerWrapper>
          </StyledCard>
        </StyledView>
      </MyView>
    </>
  );
};
const StyledCard = styled(Card)`
  border-width: ${({theme}) => theme.border.small}px;
  border-radius: ${({theme}) => theme.radius.large}px;
  border-color: ${colors.buttonPrimary};
  align-items: center;
  justify-content: center;
`;

const CardInnerWrapper = styled(View)`
  padding: 5px;
  align-items: center;
  justify-content: center;
`;
const StyledImage = styled(Image)`
  width: 55px;
  height: 55px;
`;
const StyledView = styled(View)`
  flex-direction: row;
  margin-top: 10px;
`;

export default WalletScreenFormFirst;

const styles = StyleSheet.create({});
