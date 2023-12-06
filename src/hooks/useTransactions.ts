import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from './useStore';
import {shallowEqual} from 'react-redux';
import {
  getAllTransactions,
  setSelectedTransaction,
} from '../redux/slice/transactionSlice';
import {TransactionState} from '../types/type';

export default function useTransactions() {
  const dispatch = useAppDispatch();
  const {transactionsList, selectedTransaction} = useAppSelector(
    state => ({
      transactionsList: state.transactions.transactions,
      selectedTransaction: state.transactions.selecetedTransaction,
    }),
    shallowEqual,
  );
  useEffect(() => {
    if (transactionsList.length === 0) dispatch(getAllTransactions());
  }, [transactionsList]);
  const handleSelectTransaction = (
    newCampaign: TransactionState['selecetedTransaction'],
  ) => {
    dispatch(setSelectedTransaction(newCampaign));
  };
  const handleRefreshTransactions = () => {
    dispatch(getAllTransactions());
  };
  return {
    transactions: transactionsList,
    selectedTransaction,
    handleSelectTransaction,
    handleRefreshTransactions,
  };
}
