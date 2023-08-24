import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity, Dimensions, Image} from 'react-native';
import {TobBarItem} from '../types/type';
import colors from '../utils/colors';
import themes from '../utils/themes';

interface TopBarProps {
  onGoBack: () => void;
  onTobBarItem: TobBarItem;
}

const getWidth = () => {
  const {width} = Dimensions.get('window');
  return width;
};

const TopBarPage: React.FC<TopBarProps> = ({onGoBack, onTobBarItem}) => {
  return (
    <>
      <Container>
        <BackButtonContainer>
          <TouchableOpacity onPress={onGoBack}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../assets/back_icon.png')}
            />
          </TouchableOpacity>
        </BackButtonContainer>
        <TextContainer>
          <HeaderText>{onTobBarItem.bigText}</HeaderText>
          {onTobBarItem.smallText ? (
            <Text>{onTobBarItem.smallText}</Text>
          ) : null}
        </TextContainer>
        <ProfileLogoContainer onPress={onGoBack}></ProfileLogoContainer>
      </Container>
      <Separator />
    </>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 15%;
  padding-horizontal: 10px;
  margin-top: 15px;
`;

const BackButtonContainer = styled.View`
  margin-top: 15%;
  margin-left: 3%;
`;

const TextContainer = styled.View`
  margin-top: 15%;
`;

const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: 500;
  margin-left: 10px;
`;
const Text = styled.Text`
  font-size: 15px;
  font-weight: 400;
  margin-left: 10px;
  color: ${themes.light.colors.buttonPrimary};
`;

const ProfileLogoContainer = styled(TouchableOpacity)`
  flex: 1;
  align-items: flex-end;
`;
const Separator = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: ${colors.buttonPrimary};
  width: 100%;
  align-self: center;
`;

export default TopBarPage;
