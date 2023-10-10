import React, {useContext, useEffect, useState} from 'react';
import HomeScreenForm from '../screenForms/HomeScreenForm';
import {AppDispatch} from '../redux/stores';
import {useDispatch} from 'react-redux';
import {logOut} from '../redux/slice/authReducer';
import ProfileMenu from '../components/ProfileMenu';
import {LoadingContext} from '../components/LoadingScreen';
import {Campaign, TransactionData} from '../types/type';
import {AxiosResponse} from 'axios';
import TransactionService from '../services/TransactionService';
import CampaignService from '../services/CampaignService';

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
  const [campaigns, setCampaign] = useState<Campaign[]>([
    {
      campName: '',
      campImg: '',
      campDetails: '',
      campTitle: '',
    },
  ]);

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
    fetchTransactions();
    fetchCampaigns();

    setTimeout(() => {
      setRefreshing(false);
    }, 5000);
  };
  const fetchTransactions = async () => {
    try {
      refreshing === false ? setLoading(true) : null;
      const response: AxiosResponse<TransactionData[]> =
        await TransactionService.getAllTransactions();
      const transactions: TransactionData[] = response.data.map(transaction => {
        const {_id, title, createDate, price, currency, subtitle} = transaction;
        const currencySymbol: any = currency;
        return {
          _id: _id,
          title: title,
          createDate: createDate,
          price: price,
          currency: currencySymbol.symbol,
          subtitle: subtitle,
        };
      });
      setTransactions(transactions);
    } catch (error) {
      console.error('Transactions alma hatası:', error);
    }
  };
  const fetchCampaigns = async () => {
    try {
      const response: AxiosResponse<Campaign[]> =
        await CampaignService.getAllCampaigns();
      const data = response.data;
      setCampaign(data);
      setLoading(false);
    } catch (error) {
      console.error('Kampanyaları alma hatası:', error);
    }
  };
  useEffect(() => {
    fetchTransactions();
    fetchCampaigns();
  }, []);
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
