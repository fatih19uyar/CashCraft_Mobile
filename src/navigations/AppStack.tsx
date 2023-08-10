import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import QRPaymentScreen from '../screens/QRPaymentScreen';
import WalletScreen from '../screens/WalletScreen';
import {Image} from 'react-native'; // Image bileşenini içe aktardık
import themes from '../utils/themes';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          borderTopColor: themes.light.colors.borderTopColor,
          borderTopWidth: themes.light.border.small,
        },
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name === 'Ana Sayfa') {
            iconName = require('../assets/home_icon.png'); // İlgili ad için ikonun yolu
          } else if (route.name === 'QR Ödeme') {
            iconName = require('../assets/qr_code_icon.png'); // İlgili ad için ikonun yolu
          } else if (route.name === 'Cüzdan') {
            iconName = require('../assets/wallet_icon.png'); // İlgili ad için ikonun yolu
          }
          return (
            <Image
              source={iconName}
              style={{width: size, height: size, tintColor: color}}
            />
          );
        },
      })}>
      <Tab.Screen name="Ana Sayfa" component={HomeScreen} />
      <Tab.Screen name="QR Ödeme" component={QRPaymentScreen} />
      <Tab.Screen name="Cüzdan" component={WalletScreen} />
    </Tab.Navigator>
  );
};

export default AppStack;
