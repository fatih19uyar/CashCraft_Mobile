import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import DeleteWalletScreen from '../screens/DeleteWalletScreen';
import CampaignsScreen from '../screens/CampaignsScreen';
import TransactionHistoryScreen from '../screens/TransactionHistoryScreen';

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
      <Stack.Screen
        name="TransactionHistoryScreen"
        component={TransactionHistoryScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
