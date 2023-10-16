import {StyleSheet} from 'react-native';
import React from 'react';
import TextView from '../../components/TextView';
import CardList from '../../components/CardList';
import {CardData} from '../../types/type';
import {sampleCardData} from '../../values/values';
import {useTranslation} from 'react-i18next';

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
        textColor={'black'}
        textSize={14}
        text={t('InvestScreenFormFirstText')}
        textStyle={'300'}
        textMargin={{top: 10, bottom: 10}}
      />
      <CardList cardData={sampleCardData} onItemPress={selectedCard} />
    </>
  );
};

export default InvestScreenFormFirst;

const styles = StyleSheet.create({});
