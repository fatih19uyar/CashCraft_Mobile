import React, {useContext, useEffect, useState} from 'react';
import HomeScreenForm from '../screenForms/HomeScreenForm';
import {AppDispatch} from '../redux/stores';
import {useDispatch} from 'react-redux';
import {logOut} from '../redux/slice/authSlice';
import ProfileMenu from '../components/ProfileMenu';
import {LoadingContext} from '../components/LoadingScreen';
import {Campaign, TransactionData} from '../types/type';
import {AxiosResponse} from 'axios';
import TransactionService from '../services/TransactionService';
import CampaignService from '../services/CampaignService';
import useCampaigns from '../hooks/useCampaigns';
import useTransactions from '../hooks/useTransactions';

type Props = {
  navigation: {
    goBack: () => void;
    replace: (name: string) => void;
    navigate: (name: string) => void;
  };
};

const HomeScreen = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false); // RefreshControl için durum
  const {setLoading} = useContext(LoadingContext);

  const {campaigns} = useCampaigns();
  const {transactions} = useTransactions();

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  const onPressButton = (screenName: string) => {
    switch (screenName) {
      case 'logout': {
        dispatch(logOut());
        break;
      }
      default: {
        props.navigation.navigate(screenName);
      }
    }
  };
  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 5000);
  };
  return (
    <>
      <HomeScreenForm
        campaings={campaigns}
        transactions={transactions}
        refreshing={refreshing}
        onRefresh={onRefresh}
        loadingStatus={setLoading}
        goForm={onPressButton}
        onProfile={toggleMenu}
      />
      <ProfileMenu
        onVisible={isMenuVisible}
        onCloseModal={toggleMenu}
        onPressButton={onPressButton}
      />
    </>
  );
};

export default HomeScreen;
