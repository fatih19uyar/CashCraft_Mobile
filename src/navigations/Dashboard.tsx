import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

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
import {
  NavigationContainerRef,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import WalletScreen from '../screens/WalletScreen';
import MyCardScreen from '../screens/MyCardScreen';
import CreditCardScreen from '../screens/CreditCardScreen';

const Stack = createStackNavigator();
type MyStackParamList = {
  Home: undefined;
  Settings: undefined;
  Profile: undefined;
  Wallet: undefined;
};

const Dashboard = () => {
  const dispatch: AppDispatch = useDispatch();
  const [loginStatus, setLoginStatus] = useState('WelcomeScreen');
  const userIsLoggedIn: boolean = useSelector<RootState, boolean>(
    state => state.authReducer.isAuthenticated,
  );
  const navigation = useNavigation<StackNavigationProp<MyStackParamList>>();
  useEffect(() => {
    console.log(userIsLoggedIn);
    const checkUserLoggedIn = async () => {
      if (!userIsLoggedIn) {
        const loggedInUser = await AsyncStorage.getItem('token');
        if (loggedInUser) {
          dispatch(loginSuccess({token: loggedInUser}));
          setLoginStatus('TabBottomStack');
        } else {
          navigation.dispatch(StackActions.replace('WelcomeScreen'));
          setLoginStatus('WelcomeScreen');
        }
      } else {
        navigation.dispatch(StackActions.replace('TabBottomStack'));
        setLoginStatus('TabBottomStack');
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
      <Stack.Screen name="WalletScreen" component={WalletScreen} />
      <Stack.Screen name="MyCardScreen" component={MyCardScreen} />
      <Stack.Screen name="CreditCardScreen" component={CreditCardScreen} />
      <Stack.Screen
        name="BankCardDirectedScreen"
        component={BankCardDirectedScreen}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name="TransactionHistoryScreen"
        component={TransactionHistoryScreen}
      />
      <Stack.Screen name="TabBottomStack" component={TabBottomStack} />
    </Stack.Navigator>
  );
};

export default Dashboard;
