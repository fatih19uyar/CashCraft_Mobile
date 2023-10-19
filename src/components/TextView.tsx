import React from 'react';
import {Text, TextProps} from 'react-native-paper';
import styled from 'styled-components/native';

// const StyledText = styled(Text)<Pick<TextViewProps<string>, 'textType'>>`
//   text-align: center;
//   padding: 5px;
// `;
const StyledText = styled(Text)`
  text-align: center;
  padding: 5px;
`;
type TextViewProps<T> = {
  textType?: 'header' | 'subtitle';
} & TextProps<T>;

const TextView: React.FC<TextProps<string>> = ({...props}) => {
  return (
    <StyledText {...props} style={props.style}>
      {Boolean(props.children) ? props.children : null}
    </StyledText>
  );
};

export default TextView;
