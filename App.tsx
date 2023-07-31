import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppDispatch, RootState, store} from './src/redux/stores';
import {Provider, useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginSuccess} from './src/redux/slice/authReducer';
import AppStack from './src/navigations/AppStack';
import AuthStack from './src/navigations/AuthStack';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
