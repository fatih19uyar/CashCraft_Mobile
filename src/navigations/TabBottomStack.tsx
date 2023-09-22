import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import QRPaymentScreen from '../screens/QRPaymentScreen';
import WalletScreen from '../screens/WalletScreen';
import {Image} from 'react-native'; // Image bileşenini içe aktardık
import themes from '../utils/themes';
import AppStack from './AppStack';
import HomeStack from './AppStack';
import WalletStack from './WalletStack';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

const TopBottomStack = () => {
  const {t} = useTranslation();
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
          if (route.name === t('HomePage')) {
            iconName = require('../assets/home_icon.png'); // İlgili ad için ikonun yolu
          } else if (route.name === t('QRPayment')) {
            iconName = require('../assets/qr_code_icon.png'); // İlgili ad için ikonun yolu
          } else if (route.name === t('Wallet')) {
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
      <Tab.Screen name={t('HomePage')} component={HomeStack} />
      <Tab.Screen name={t('QRPayment')} component={QRPaymentScreen} />
      <Tab.Screen name={t('Wallet')} component={WalletStack} />
    </Tab.Navigator>
  );
};

export default TopBottomStack;
