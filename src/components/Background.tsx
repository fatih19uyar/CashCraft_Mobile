import React, {FC, ReactNode} from 'react';
import styled from 'styled-components/native';

interface BackgroundProps {
  imageSet: number;
  children: ReactNode;
}

const Background: FC<BackgroundProps> = ({imageSet, children}) => {
  return (
    <Container>
      {imageSet === 1 ? (
        <BackgroundImage source={require('../assets/background_1.png')} />
      ) : (
        <BackgroundImage source={require('../assets/background_2.png')} />
      )}

      {children}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BackgroundImage = styled.Image`
  resize-mode: cover;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default Background;
