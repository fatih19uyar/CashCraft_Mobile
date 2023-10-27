import {Dimensions, View} from 'react-native';
import React from 'react';
import MyView from '../../components/MyView';
import {styled} from 'styled-components/native';
import {Card} from 'react-native-paper';
import colors from '../../utils/colors';
import TextView from '../../components/TextView';
import {useTranslation} from 'react-i18next';
import themes from '../../utils/themes';

type Props = {
  goScreen: (screenName: string) => void; // goScreen prop'unu tanımladık
};

const WalletScreenFormFirst: React.FC<Props> = props => {
  const cardWidth = Dimensions.get('window').width * 0.3; // Ekran genişliğinin %30'u kadar bir kart genişliği
  const cardMargin = Dimensions.get('window').width * 0.02; // Ekran genişliğinin %2'si kadar bir kart kenar boşluğu
  const {t} = useTranslation();
  return (
    <>
      <MyView>
        <StyledView>
          <StyledCard
            key={0}
            style={{
              width: cardWidth,
              marginLeft: cardMargin, // İlk kartın sol kenar boşluğu
              marginRight: cardMargin, // Kartlar arası sağ kenar boşluğu
              height: 150,
            }}
            onPress={() => props.goScreen('MyCardScreen')} // onPress eventini handleCardPress fonksiyonu ile yönlendiriyoruz
          >
            <CardInnerWrapper>
              <TextView
                style={{
                  color: themes.light.colors.text,
                  fontSize: themes.light.fontSize.medium,
                  fontWeight: 'bold',
                  marginTop: themes.light.textMargin.top.small,
                }}>
                {t('MyBankCards')}
              </TextView>
            </CardInnerWrapper>
          </StyledCard>
          <StyledCard
            key={1}
            style={{
              width: cardWidth,
              marginLeft: cardMargin, // İlk kartın sol kenar boşluğu
              marginRight: cardMargin, // Kartlar arası sağ kenar boşluğu
              height: 150,
            }}
            onPress={() => props.goScreen('CreditCardScreen')} // onPress eventini handleCardPress fonksiyonu ile yönlendiriyoruz
          >
            <CardInnerWrapper>
              <TextView
                style={{
                  color: themes.light.colors.text,
                  fontSize: themes.light.fontSize.medium,
                  fontWeight: 'bold',
                  marginTop: themes.light.textMargin.top.small,
                }}>
                {t('MyCreditCards')}
              </TextView>
            </CardInnerWrapper>
          </StyledCard>
        </StyledView>
        <StyledView>
          <StyledCard
            key={0}
            style={{
              width: cardWidth,
              marginLeft: cardMargin,
              marginRight: cardMargin,
              height: 150,
            }}
            onPress={() => props.goScreen('MyMyCardScreen')}>
            <CardInnerWrapper>
              <TextView
                style={{
                  color: themes.light.colors.text,
                  fontSize: themes.light.fontSize.medium,
                  fontWeight: 'bold',
                  marginTop: themes.light.textMargin.top.small,
                }}>
                {t('MyStoreCards')}
              </TextView>
            </CardInnerWrapper>
          </StyledCard>
          <StyledCard
            key={1}
            style={{
              width: cardWidth,
              marginLeft: cardMargin,
              marginRight: cardMargin,
              height: 150,
            }}
            onPress={() => props.goScreen('MyMyCardScreen')}>
            <CardInnerWrapper>
              <TextView
                style={{
                  color: themes.light.colors.text,
                  fontSize: themes.light.fontSize.medium,
                  fontWeight: 'bold',
                  marginTop: themes.light.textMargin.top.small,
                }}>
                {t('MyGiftCards')}
              </TextView>
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
const StyledView = styled(View)`
  flex-direction: row;
  margin-top: 10px;
`;

export default WalletScreenFormFirst;
