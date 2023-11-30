import React, {useState} from 'react';
import HomeScreenForm from '../screenForms/HomeScreenForm';
import {AppDispatch, RootState} from '../redux/stores';
import {useDispatch, useSelector} from 'react-redux';
import {logOut} from '../redux/slice/authSlice';
import ProfileMenu from '../components/ProfileMenu';
import useCampaigns from '../hooks/useCampaigns';
import useTransactions from '../hooks/useTransactions';
import {loadingSet} from '../redux/slice/navigationSlice';
import LoginRecordService from '../services/LoginRecordService';
import {LoginRecordType} from '../types/type';
import publicIP from 'react-native-public-ip';
import getDeviceInfo from '../utils/DeviceInfo';

type Props = {
  navigation: {
    goBack: () => void;
    replace: (name: string) => void;
    navigate: (name: string) => void;
  };
};

const HomeScreen = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const userId: string | null = useSelector<RootState, string | null>(
    state => state.authReducer.userId,
  );
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
        onLogOut();
        break;
      }
      default: {
        props.navigation.navigate(screenName);
      }
    }
  };
  const onLogOut = async () => {
    LoginRecordService.createLoginRecord({
      userId: userId ? userId : '6507717bc16df61df6f0eb82',
      type: LoginRecordType.SIGNOUT,
      ipAddress: (await publicIP()).toString(),
      deviceInfo: (await getDeviceInfo()).uniqueId,
    }).then(() => {
      dispatch(logOut());
    });
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
