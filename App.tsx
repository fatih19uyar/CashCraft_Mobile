import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppDispatch, RootState, store} from './src/redux/stores';
import {Provider, useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginSuccess} from './src/redux/slice/authReducer';
import AppStack from './src/navigations/AppStack';
import AuthStack from './src/navigations/AuthStack';
import { ThemeProvider } from 'styled-components';
import themes from './src/utils/themes';

const Stack = () => {
  const dispatch: AppDispatch = useDispatch();
  const userIsLoggedIn: boolean = useSelector<RootState, boolean>(
    state => state.authReducer.isAuthenticated,
  );
  useEffect(() => {
    console.log(userIsLoggedIn);
    const checkUserLoggedIn = async () => {
      if (!userIsLoggedIn) {
        const loggedInUser = await AsyncStorage.getItem('user');
        if (loggedInUser) {
          const user = JSON.parse(loggedInUser);
          dispatch(loginSuccess(user));
        }
      }
    };

    checkUserLoggedIn();
  }, [dispatch, userIsLoggedIn]);

  return (
    <NavigationContainer>
      {userIsLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

const App = () => {
  const currentTheme = 'light'; // Seçilen tema

  return (
    <ThemeProvider theme={themes[currentTheme]}>
    <Provider store={store}>
      <Stack />
    </Provider>
    </ThemeProvider>
  );
};

export default App;
