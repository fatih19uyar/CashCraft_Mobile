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
import LoadingScreen, {LoadingProvider} from './src/components/LoadingScreen';
import Dashboard from './src/navigations/Dashboard';

const App = () => {
  const currentTheme = 'light'; // Seçilen tema

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <LoadingProvider>
        <Provider store={store}>
          <NavigationContainer>
            <Dashboard />
          </NavigationContainer>
        </Provider>
        <Toast config={toastConfig} />
        <LoadingScreen />
      </LoadingProvider>
    </ThemeProvider>
  );
};

export default App;
