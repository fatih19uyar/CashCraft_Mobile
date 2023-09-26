import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type BackButtonProps = {
  goBack: () => void;
};

const BackButton: React.FC<BackButtonProps> = ({goBack}) => {
  const insets = useSafeAreaInsets();

  return (
    <Container style={{paddingTop: insets.top}}>
      <Button onPress={goBack}>
        <ButtonImage source={require('../assets/back_icon.png')} />
      </Button>
    </Container>
  );
};

const Container = styled.View`
  position: absolute;
  left: 15px;
  z-index: 1;
`;

const Button = styled(TouchableOpacity)``;

const ButtonImage = styled(Image)`
  margin-top: 40px;
  margin-left: 10px;
  width: 30px;
  height: 30px;
`;

export default BackButton;
