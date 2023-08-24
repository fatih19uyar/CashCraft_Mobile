import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import DeleteWalletScreen from '../screens/DeleteWalletScreen';
import CampaignsScreen from '../screens/CampaignsScreen';
import TransactionHistoryScreen from '../screens/TransactionHistoryScreen';
import InvestScreen from '../screens/InvestScreen';
import BankCardDirectedScreen from '../screens/BankCardDirectedScreen';
import ReservationScreen from '../screens/ReservationScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="DeleteWalletScreen" component={DeleteWalletScreen} />
      <Stack.Screen name="CampaignsScreen" component={CampaignsScreen} />
      <Stack.Screen name="InvestScreen" component={InvestScreen} />
      <Stack.Screen name="ReservationScreen" component={ReservationScreen} />
      <Stack.Screen
        name="TransactionHistoryScreen"
        component={TransactionHistoryScreen}
      />
      <Stack.Screen
        name="BankCardDirectedScreen"
        component={BankCardDirectedScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
