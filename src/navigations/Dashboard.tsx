import React, {useEffect} from 'react';
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
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {loginSuccess} from '../redux/slice/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackActions, useNavigation} from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import WalletScreen from '../screens/WalletScreen';
import MyCardScreen from '../screens/MyCardScreen';
import CreditCardScreen from '../screens/CreditCardScreen';
import {useAppSelector} from '../hooks/useStore';
import {initialRouteNameSet} from '../redux/slice/navigationSlice';
import {userData} from '../types/type';

const Stack = createStackNavigator();
type MyStackParamList = {
  Home: undefined;
  Settings: undefined;
  Profile: undefined;
  Wallet: undefined;
};

const Dashboard = () => {
  const dispatch: AppDispatch = useDispatch();
  const userIsLoggedIn: boolean = useSelector<RootState, boolean>(
    state => state.authReducer.isAuthenticated,
  );
  const {navigationState} = useAppSelector(
    state => ({
      navigationState: state.navigation,
    }),
    shallowEqual,
  );
  const navigation = useNavigation<StackNavigationProp<MyStackParamList>>();
  useEffect(() => {
    console.log(userIsLoggedIn);
    const checkUserLoggedIn = async () => {
      if (!userIsLoggedIn) {
        const loggedInUserString: string | null = await AsyncStorage.getItem(
          'userData',
        );
        if (loggedInUserString) {
          const loggedInUser: userData = JSON.parse(loggedInUserString);
          dispatch(
            loginSuccess({
              token: loggedInUser.token,
              userId: loggedInUser.userId,
            }),
          );
          dispatch(initialRouteNameSet({initialRouteName: 'TabBottomStack'}));
        } else {
          navigation.dispatch(StackActions.replace('WelcomeScreen'));
          dispatch(initialRouteNameSet({initialRouteName: 'WelcomeScreen'}));
        }
      } else {
        navigation.dispatch(StackActions.replace('TabBottomStack'));
        dispatch(initialRouteNameSet({initialRouteName: 'TabBottomStack'}));
      }
    };
    checkUserLoggedIn();
  }, [dispatch, userIsLoggedIn, navigationState.initialRouteName]);
  return (
    <Stack.Navigator
      initialRouteName={navigationState.initialRouteName}
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
