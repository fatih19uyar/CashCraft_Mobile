import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import styled from 'styled-components/native';
import {TextViewProps} from '../types/type';

const TextView: React.FC<TextViewProps> = props => {
  const {textColor, textSize, textStyle, text, textMargin} = props;

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
    fontSize: textSize,
    lineHeight: textSize + 5,
    fontWeight: textStyle,
    ...getMarginStyles(),
  };

  return <StyledText style={textStyleObject}>{text}</StyledText>;
};

const StyledText = styled(Text)`
  text-align: center;
  margin-bottom: 12px;
  margin-top: 10px;
  margin-horizontal: 40px;
`;

export default TextView;
