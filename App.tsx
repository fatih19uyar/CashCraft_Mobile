import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppDispatch, RootState, store} from './src/redux/stores';
import {Provider, useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginSuccess} from './src/redux/slice/authReducer';
import AuthStack from './src/navigations/AuthStack';
import {ThemeProvider} from 'styled-components';
import themes from './src/utils/themes';
import TopBottomStack from './src/navigations/TabBottomStack';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {toastConfig} from './src/components/ToastMessage';

const Stack = () => {
  const dispatch: AppDispatch = useDispatch();
  const userIsLoggedIn: boolean = useSelector<RootState, boolean>(
    state => state.authReducer.isAuthenticated,
  );
  useEffect(() => {
    console.log(userIsLoggedIn);
    const checkUserLoggedIn = async () => {
      if (!userIsLoggedIn) {
        const loggedInUser = await AsyncStorage.getItem('token');
        if (loggedInUser) {
          dispatch(loginSuccess({token: loggedInUser}));
        }
      }
    };

    checkUserLoggedIn();
  }, [dispatch, userIsLoggedIn]);

  return (
    <NavigationContainer>
      {userIsLoggedIn ? <TopBottomStack /> : <AuthStack />}
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
      <Toast config={toastConfig} />
    </ThemeProvider>
  );
};

export default App;
