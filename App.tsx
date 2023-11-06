import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/redux/stores';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import themes from './src/utils/themes';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {toastConfig} from './src/components/ToastMessage';
import './src/i18n/i18n';
import 'intl-pluralrules';
import LoadingScreen from './src/components/LoadingScreen';
import Dashboard from './src/navigations/Dashboard';
import {Animated} from 'react-native';

const App = () => {
  const currentTheme = 'light'; // Seçilen tema
  const av = new Animated.Value(0);
  av.addListener(() => {
    return;
  });
  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <Provider store={store}>
        <NavigationContainer>
          <Dashboard />
        </NavigationContainer>
        <LoadingScreen />
      </Provider>
      <Toast config={toastConfig} />
    </ThemeProvider>
  );
};

export default App;
