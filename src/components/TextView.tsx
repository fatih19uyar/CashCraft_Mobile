import React from 'react';
import {Text} from 'react-native-paper';
import styled from 'styled-components/native';
import {TextViewProps} from '../types/type';

const TextView: React.FC<TextViewProps> = ({
  textColor,
  textSize,
  textStyle,
  textMargin,
  text,
}) => {
  const getMarginStyles = () => {
    if (textMargin) {
      if (typeof textMargin === 'object') {
        return {
          marginTop: textMargin.top || 0,
          marginBottom: textMargin.bottom || 0,
        };
      } else {
        return {
          marginTop: textMargin || 0,
          marginBottom: textMargin || 0,
        };
      }
    } else {
      return {
        marginTop: 0,
        marginBottom: 0,
      };
    }
  };

  const textStyleObject = {
    fontSize: parseInt(textSize.toString()),
    lineHeight: textSize + 5,
    fontWeight: textStyle,
    color: textColor,
    ...getMarginStyles(),
  };

  return <StyledText style={textStyleObject}>{text}</StyledText>;
};

const StyledText = styled(Text)`
  text-align: center;
  margin-bottom: 12px;
  margin-top: 10px;
  padding: 5px;
`;

export default TextView;
