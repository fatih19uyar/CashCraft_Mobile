import {StyleSheet} from 'react-native';
import React from 'react';
import TextView from '../../components/TextView';
import CardList from '../../components/CardList';
import {CardData, CardStyle} from '../../types/type';
import {sampleCardData} from '../../values/values';
import {useTranslation} from 'react-i18next';
import themes from '../../utils/themes';

interface InvestScreenFormFirstProps {
  goNewCard: () => void;
  selectedCard: (CardData: CardData) => void;
}

const InvestScreenFormFirst: React.FC<InvestScreenFormFirstProps> = ({
  goNewCard,
  selectedCard,
}) => {
  const {t} = useTranslation();
  return (
    <>
      <TextView
        style={{
          color: themes.light.colors.text,
          fontSize: themes.light.fontSize.small + 2,
          marginBottom: themes.light.textMargin.bottom.medium,
          marginTop: themes.light.textMargin.bottom.medium,
          fontWeight: '300',
        }}>
        {t('InvestScreenFormFirstText')}
      </TextView>
      <CardList
        cardData={sampleCardData}
        onItemPress={selectedCard}
        cardStyle={CardStyle.BANK}
      />
    </>
  );
};

export default InvestScreenFormFirst;

const styles = StyleSheet.create({});
