import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import DeleteWalletScreen from '../screens/DeleteWalletScreen';
import CampaignsScreen from '../screens/CampaignsScreen';
import TransactionHistoryScreen from '../screens/TransactionHistoryScreen';
import InvestScreen from '../screens/InvestScreen';
import BankCardDirectedScreen from '../screens/BankCardDirectedScreen';
import ReservationScreen from '../screens/ReservationScreen';
import TabBottomStack from './TabBottomStack';
import {AppDispatch, RootState} from '../redux/stores';
import {useDispatch, useSelector} from 'react-redux';
import {loginSuccess} from '../redux/slice/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

type Props = {};
const Stack = createStackNavigator();

const Dashboard = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const [loginStatus, setLoginStatus] = useState('WelcomeScreen');
  const userIsLoggedIn: boolean = useSelector<RootState, boolean>(
    state => state.authReducer.isAuthenticated,
  );
  const navigation: {navigate: (name: string) => void} = useNavigation();
  useEffect(() => {
    console.log(userIsLoggedIn);
    const checkUserLoggedIn = async () => {
      console.log(userIsLoggedIn, 'login');
      if (!userIsLoggedIn) {
        const loggedInUser = await AsyncStorage.getItem('token');
        if (loggedInUser) {
          dispatch(loginSuccess({token: loggedInUser}));
          setLoginStatus('TabBottomStack');
        } else {
          navigation.navigate('WelcomeScreen');
          setLoginStatus('WelcomeScreen');
        }
      } else {
        navigation.navigate('HomeScreen');
        setLoginStatus('HomeScreen');
      }
    };
    checkUserLoggedIn();
  }, [dispatch, userIsLoggedIn]);
  return (
    <Stack.Navigator
      initialRouteName={loginStatus}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="DeleteWalletScreen" component={DeleteWalletScreen} />
      <Stack.Screen name="CampaignsScreen" component={CampaignsScreen} />
      <Stack.Screen name="InvestScreen" component={InvestScreen} />
      <Stack.Screen name="ReservationScreen" component={ReservationScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name="TransactionHistoryScreen"
        component={TransactionHistoryScreen}
      />
      <Stack.Screen
        name="BankCardDirectedScreen"
        component={BankCardDirectedScreen}
      />
      <Stack.Screen name="TabBottomStack" component={TabBottomStack} />
    </Stack.Navigator>
  );
};

export default Dashboard;
