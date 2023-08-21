import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';
import colors from '../utils/colors';
import {items} from '../values/values';
import {styled} from 'styled-components/native';

interface TransactionListProps {
  goForm: (screenName: string) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({goForm}) => {
  return (
    <>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title
            textStyle={styles.headerTitle}
            onPress={() => goForm('TransactionHistoryScreen')}>
            Son İşlemler -{'> '}
          </DataTable.Title>
        </DataTable.Header>

        {items.map(item => (
          <DataTable.Row key={item.key} style={{borderColor: colors.gray}}>
            <DataTable.Cell>
              <View>
                <NameText>{item.name}</NameText>
                <DateText>{item.date}</DateText>
              </View>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <View>
                <AmountText>{item.amount} TL</AmountText>
              </View>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontWeight: 'bold',
    color: colors.text,
  },
});

const NameText = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: ${colors.text};
`;

const DateText = styled.Text`
  font-size: 12px;
  color: ${colors.gray};
`;

const AmountText = styled.Text`
  color: ${colors.transactionListAmount};
  font-size: 14px;
  font-weight: bold;
`;

export default TransactionList;
