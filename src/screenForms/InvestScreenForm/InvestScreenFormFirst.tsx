import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextView from '../../components/TextView';
import MyView from '../../components/MyView';
import CardList from '../../components/CardList';
import {CardData} from '../../types/type';
import {sampleCardData} from '../../values/values';

interface InvestScreenFormFirstProps {
  goNewCard: () => void;
  selectedCard: (CardData: CardData) => void;
}

const InvestScreenFormFirst: React.FC<InvestScreenFormFirstProps> = ({
  goNewCard,
  selectedCard,
}) => {
  return (
    <>
      <TextView
        textColor={'black'}
        textSize={14}
        text={
          'Cüzdan hesabına kayıtlı banka/kredi ' +
          'kartınla veya yeni bir kart ile para yatırabilirsin.' +
          'Para yatırma işlemlerinde tutarın %1’i kadar işlem ücreti alınmaktadır.'
        }
        textStyle={'300'}
        textMargin={{top: 10, bottom: 10}}
      />
      <CardList cardData={sampleCardData} onItemPress={selectedCard} />
    </>
  );
};

export default InvestScreenFormFirst;

const styles = StyleSheet.create({});
