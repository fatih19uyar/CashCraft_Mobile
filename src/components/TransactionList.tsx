import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DataTable} from 'react-native-paper';
import colors from '../utils/colors';
import {styled} from 'styled-components/native';
import {useTranslation} from 'react-i18next';
import {TransactionData} from '../types/type';

interface TransactionListProps {
  goForm: (screenName: string) => void;
  transactions: TransactionData[];
}

const TransactionList: React.FC<TransactionListProps> = ({
  goForm,
  transactions,
}) => {
  const {t} = useTranslation();
  const limitedTransactions = transactions.slice(0, 4);
  return (
    <>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title
            textStyle={styles.headerTitle}
            onPress={() => goForm('TransactionHistoryScreen')}>
            {t('LastTransaction')}
          </DataTable.Title>
        </DataTable.Header>

        {limitedTransactions.length > 0 ? (
          limitedTransactions.map(item => (
            <DataTable.Row key={item._id} style={{borderColor: colors.gray}}>
              <DataTable.Cell>
                <View>
                  <NameText>{item.title}</NameText>
                  <DateText>
                    {new Date(item.createDate).toLocaleString('en-US', {
                      hour12: false,
                    })}
                  </DateText>
                </View>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <View>
                  <AmountText>
                    {item.price} {item.currency.symbol}
                  </AmountText>
                </View>
              </DataTable.Cell>
            </DataTable.Row>
          ))
        ) : (
          <></>
        )}
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
