import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/stores';
import { logOut } from '../redux/slice/authReducer';
import styled from 'styled-components/native';

const LogOutButton = () => {
  const insets = useSafeAreaInsets();
  const dispatch: AppDispatch = useDispatch();

  const logOutFun = () => {
    dispatch(logOut());
  };

  return (
    <Container style={{ paddingTop: insets.top }}>
      <Touchable onPress={logOutFun}>
        <LogoutImage source={require('../assets/logout.png')} />
      </Touchable>
    </Container>
  );
};

const Container = styled.View`
  position: absolute;
  right: 15px;
  z-index: 1;
`;

const Touchable = styled.TouchableOpacity``;

const LogoutImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export default LogOutButton;
