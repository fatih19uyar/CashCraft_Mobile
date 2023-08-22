import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MyCardScreen from '../screens/MyCardScreen';
import BankCardDirectedScreen from '../screens/BankCardDirectedScreen';
import CreditCardScreen from '../screens/CreditCardScreen';
import WalletScreen from '../screens/WalletScreen';

const Stack = createStackNavigator();

const WalletStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WalletScreen" component={WalletScreen} />
      <Stack.Screen name="MyMyCardScreen" component={MyCardScreen} />
      <Stack.Screen
        name="BankCardDirectedScreen"
        component={BankCardDirectedScreen}
      />
      <Stack.Screen name="CreditCardScreen" component={CreditCardScreen} />
    </Stack.Navigator>
  );
};

export default WalletStack;
