import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from './useStore';
import {shallowEqual} from 'react-redux';
import {getWalletCard} from '../redux/slice/walletCardSlice';

export default function useWalletCard() {
  const dispatch = useAppDispatch();
  const {walletCard} = useAppSelector(
    state => ({
      walletCard: state.walletCard,
    }),
    shallowEqual,
  );
  useEffect(() => {
    if (walletCard.cardName === '') dispatch(getWalletCard());
  }, [walletCard]);
  const handleRefreshWalletCard = () => {
    dispatch(getWalletCard());
  };
  return {walletCard, handleRefreshWalletCard};
}
