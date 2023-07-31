import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {TextViewProps} from '../types/type';

export default function TextView(props: TextViewProps) {
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
    color: textColor,
    fontWeight: textStyle,
    ...getMarginStyles(),
  };

  return <Text style={[styles.text, textStyleObject]}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    lineHeight: 40,
    textAlign: 'center',
    marginBottom: 12,
    marginTop: 10,
  },
});
