import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Card} from 'react-native-paper';
import colors from '../utils/colors';
import TextView from './TextView';

interface MoneyCardProps {
  amount: string;
  accountName: string;
  accountNumber: number;
}

const getWidth = () => {
  const {width} = Dimensions.get('window');
  return width * 0.9; // Ekranın yatay çözünürlüğünün %90'ini hesapla
};

const MoneyCard: React.FC<MoneyCardProps> = ({
  amount,
  accountName,
  accountNumber,
}) => {
  return (
    <Card style={styles.container}>
      <Card.Content style={styles.content}>
        <TextView
          textColor={'black'}
          textSize={25}
          text={`${accountName} cüzdan hesabın`}
          textStyle={'300'}
          textMargin={{top: 0, bottom: 0}}
        />
        <TextView
          textColor={'black'}
          textSize={40}
          text={`₺ ${amount}`}
          textStyle={'bold'}
          textMargin={{top: 5, bottom: 5}}
        />
        <TextView
          textColor={'black'}
          textSize={18}
          text={`cüzdan numarası ${accountNumber}`}
          textStyle={'300'}
          textMargin={{top: 0, bottom: 0}}
        />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    width: getWidth(),
    height: 150,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 10,
    borderColor: colors.buttonPrimary,
  },
  content: {
    justifyContent: 'center',
  },
});

export default MoneyCard;
