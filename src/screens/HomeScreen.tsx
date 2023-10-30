import React, {useContext, useEffect, useState} from 'react';
import HomeScreenForm from '../screenForms/HomeScreenForm';
import {AppDispatch} from '../redux/stores';
import {useDispatch} from 'react-redux';
import {logOut} from '../redux/slice/authSlice';
import ProfileMenu from '../components/ProfileMenu';
import useCampaigns from '../hooks/useCampaigns';
import useTransactions from '../hooks/useTransactions';
import {loadingSet} from '../redux/slice/navigationSlice';

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
    dispatch(loadingSet({loading: true}));
    setTimeout(() => {
      setRefreshing(false);
      dispatch(loadingSet({loading: false}));
    }, 5000);
  };
  return (
    <>
      <HomeScreenForm
        campaings={campaigns}
        transactions={transactions}
        refreshing={refreshing}
        onRefresh={onRefresh}
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
