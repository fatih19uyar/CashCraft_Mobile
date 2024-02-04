import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity, Dimensions} from 'react-native';
import colors from '../utils/colors';

interface TopBarProps {
  onProfileLogoPress: () => void;
}

const getWidth = () => {
  const {width} = Dimensions.get('window');
  return width;
};

const TopBar: React.FC<TopBarProps> = ({onProfileLogoPress}) => {
  return (
    <>
      <Container>
        <LogoContainer>
          <Logo source={require('../assets/app-logo.png')} />
        </LogoContainer>
        <ProfileLogoContainer onPress={onProfileLogoPress}>
          <ProfileLogo source={require('../assets/profile_logo.png')} />
        </ProfileLogoContainer>
      </Container>
      <Separator />
    </>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-top: 15%;
`;

const LogoContainer = styled.View`
  flex: 1;
  align-items: center;
  margin-left: ${getWidth() / 6}px;
  margin-bottom: 5px;
`;

const Logo = styled.Image`
  width: 200px;
  resize-mode: contain;
`;

const ProfileLogoContainer = styled(TouchableOpacity)`
  flex: 1;
  align-items: flex-end;
  margin-right: 10px;
`;

const ProfileLogo = styled.Image`
  width: 40px;
  height: 40px;
`;

const Separator = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: ${colors.buttonPrimary};
  width: 100%;
  align-self: center;
  margin-vertical: 10px;
`;

export default TopBar;
