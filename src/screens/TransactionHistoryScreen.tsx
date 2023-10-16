import React, {useContext, useEffect, useState} from 'react';
import Background from '../components/Background';
import TransactionHistoryScreenForm from '../screenForms/TransactionHistoryScreenForm';
import TopBarPage from '../components/TopBarPage';
import TransactionFilterMenu from '../components/TransactionFilterMenu';
import {useTranslation} from 'react-i18next';
import {AxiosResponse} from 'axios';
import {TransactionData} from '../types/type';
import TransactionService from '../services/TransactionService';
import {LoadingContext} from '../components/LoadingScreen';

type Props = {
  navigation: {
    goBack: () => void;
    replace: (name: string) => void;
    navigate: (name: string) => void;
  };
};

const TransactionHistoryScreen = (props: Props) => {
  const {t} = useTranslation();
  const {setLoading} = useContext(LoadingContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [transactions, setTransactions] = useState<TransactionData[]>([
    {
      _id: '1',
      title: '',
      subtitle: '',
      createDate: '',
      price: '',
      currency: '',
    },
  ]);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onSearch = (values: string) => {
    console.log('search', values);
  };

  const onPressDetails = () => {
    toggleModal();
  };

  const goBack = () => {
    props.navigation.goBack();
  };
  useEffect(() => {
    setLoading(true);
    const fetchTransactions = async () => {
      try {
        const response: AxiosResponse<TransactionData[]> =
          await TransactionService.getAllTransactions();
        const transactions: TransactionData[] = response.data.map(
          transaction => {
            const {_id, title, createDate, price, currency, subtitle} =
              transaction;
            const currencySymbol: any = currency;
            return {
              _id: _id,
              title: title,
              createDate: createDate,
              price: price,
              currency: currencySymbol.symbol,
              subtitle: subtitle,
            };
          },
        );
        setTransactions(transactions);
        setLoading(false);
      } catch (error) {
        console.error('Transactions alma hatası:', error);
      }
    };
    fetchTransactions();
    return () => {
      false;
    };
  }, []);
  return (
    <Background imageSet={1}>
      <TopBarPage
        onGoBack={goBack}
        onTobBarItem={{
          bigText: t('TransactionHistory'),
        }}
      />
      <TransactionHistoryScreenForm
        transactions={transactions}
        onPressDetails={onPressDetails}
        onSearch={onSearch}
      />
      <TransactionFilterMenu
        onVisible={isModalVisible}
        onCloseModal={toggleModal}
        onPressButton={() => {
          console.log('deneme');
        }}
      />
    </Background>
  );
};

export default TransactionHistoryScreen;
