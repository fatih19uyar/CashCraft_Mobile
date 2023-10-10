import React, {useEffect, useState} from 'react';
import {Searchbar} from 'react-native-paper';
import themes from '../utils/themes';
import {Image, TouchableOpacity, View} from 'react-native';
import {styled} from 'styled-components/native';
import colors from '../utils/colors';
import DetailTransactionList from '../components/DetailTransactionList';
import {useTranslation} from 'react-i18next';
import {TransactionData} from '../types/type';

interface TransactionHistoryScreenFormProps {
  onSearch: (searchValue: string) => void;
  onPressDetails: () => void;
  transactions: TransactionData[];
}
const TransactionHistoryScreenForm: React.FC<
  TransactionHistoryScreenFormProps
> = ({onSearch, onPressDetails, transactions}) => {
  const {t} = useTranslation();
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <>
      <ComponentView>
        <Searchbar
          style={{
            width: '80%',
            alignSelf: 'center',
            margin: 10,
            backgroundColor: themes.light.colors.background,
            borderColor: themes.light.colors.textColor2,
            borderWidth: 1,
          }}
          placeholder={t('SearchPlaceHolder')}
          onChangeText={handleSearch}
          value={searchQuery}
        />
        <TouchableOpacity onPress={onPressDetails}>
          <StyledImage source={require('../assets/calendar.png')} />
        </TouchableOpacity>
      </ComponentView>
      <Separator />
      <DetailTransactionList transactions={transactions} />
    </>
  );
};
const StyledImage = styled(Image)`
  width: 50px;
  height: 50px;
  margin-right: 5px;
`;
const Separator = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: ${colors.buttonPrimary};
  width: 100%;
  align-self: center;
`;
const ComponentView = styled.View`
  flex-direction: row;
  align-items: center;
`;
export default TransactionHistoryScreenForm;
