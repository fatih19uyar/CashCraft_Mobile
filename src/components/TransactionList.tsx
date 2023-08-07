import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DataTable, Text} from 'react-native-paper';
import colors from '../utils/colors';
import {items} from '../values/values';

const TransactionList = () => {
  return (
    <>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title
            textStyle={styles.headerTitle}
            onPress={() => console.log('son')}>
            Son İşlemler -{'> '}
          </DataTable.Title>
        </DataTable.Header>

        {items.map(item => (
          <DataTable.Row key={item.key} style={{borderBottomColor: '#FFF'}}>
            <DataTable.Cell>
              <View>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.dateText}>{item.date}</Text>
              </View>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <View>
                <Text style={styles.amount}>{item.amount} TL</Text>
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
  nameText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.text,
  },
  dateText: {
    fontSize: 12,
    color: colors.gray,
  },
  amount: {
    color: colors.transactionListAmount,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TransactionList;
