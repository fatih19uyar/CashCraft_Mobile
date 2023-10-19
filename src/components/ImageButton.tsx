import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import styled from 'styled-components/native';
import themes from '../utils/themes';

interface ImageButtonProps {
  onPress: () => void;
  text: string;
  backColor: string;
  textColor: string;
  leftImageSource: any; // Sol resim yolunu belirlemek için
  rightImageSource: any; // Sağ resim yolunu belirlemek için
}

const ImageButton: React.FC<ImageButtonProps> = props => {
  const {
    onPress,
    text,
    leftImageSource,
    rightImageSource,
    backColor,
    textColor,
  } = props;

  return (
    <ButtonContainer backColor={backColor} onPress={onPress}>
      <ImageContainer>
        {leftImageSource ? (
          <Image style={{height: 30, width: 30}} source={leftImageSource} />
        ) : null}
      </ImageContainer>
      <StyledTextView textColor={textColor} variant="titleSmall">
        {text}
      </StyledTextView>
      <ImageContainer>
        {rightImageSource ? (
          <Image style={{height: 30, width: 30}} source={rightImageSource} />
        ) : null}
      </ImageContainer>
    </ButtonContainer>
  );
};

const ButtonContainer = styled(TouchableOpacity)<{backColor: string}>`
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.backColor};
  width: 80%;
  margin-top: 10px;
  margin-vertical: 5px;
  border: 1px solid gray; /* Gri sınır eklendi */
  padding: 5px;
  border-radius: 20px;
  justify-content: space-between;
`;

const StyledTextView = styled(Text)<{textColor: string}>`
  margin: ${themes.light.textMargin.top.small}px 0
    ${themes.light.textMargin.top.small}px;
  color: ${props => props.textColor};
`;

const ImageContainer = styled(View)`
  width: 30px;
  height: 30px;
  margin-left: 5px;
`;

export default ImageButton;
