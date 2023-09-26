import React, {ReactNode} from 'react';
import {View, Text} from 'react-native';
import Toast, {
  ToastConfig,
  ToastConfigParams,
} from 'react-native-toast-message';
import themes from '../utils/themes';
import styled from 'styled-components/native';

export type ToastTypes = 'success' | 'info' | 'fault';

const StyledToastContainer = styled(View)<{id: ToastTypes}>`
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  height: 60px;
  width: 90%;
  background-color: ${themes.light.colors.toastColor.border.backgroundColor};
  border-left-width: 20px;
  border-right-width: 10px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-color: ${props => {
    switch (props.id) {
      case 'success':
        return themes.light.colors.toastColor.border.success;
      case 'info':
        return themes.light.colors.toastColor.border.info;
      case 'fault':
        return themes.light.colors.toastColor.border.error;
      default:
        return 'transparent';
    }
  }};
`;

const StyledTextBold = styled(Text)`
  font-weight: bold;
  font-size: 15px;
`;

const StyledTextRegular = styled(Text)`
  font-weight: 400;
  font-size: 12px;
`;

export const toastConfig: {
  [key in ToastTypes]: (config: ToastConfigParams<ToastTypes>) => ReactNode;
} = {
  success: ({text1, text2, ...params}: ToastConfigParams<ToastTypes>) => {
    return (
      <StyledToastContainer id="success">
        <StyledTextBold>{text1}</StyledTextBold>
        {text2 ? <StyledTextRegular>{text2}</StyledTextRegular> : null}
      </StyledToastContainer>
    );
  },
  fault: ({text1, text2, ...params}: ToastConfigParams<ToastTypes>) => (
    <StyledToastContainer id="fault">
      <StyledTextBold>{text1}</StyledTextBold>
      {text2 ? <StyledTextRegular>{text2}</StyledTextRegular> : null}
    </StyledToastContainer>
  ),
  info: ({text1, text2, ...params}: ToastConfigParams<ToastTypes>) => (
    <StyledToastContainer id="info">
      <StyledTextBold>{text1}</StyledTextBold>
      {text2 ? <StyledTextRegular>{text2}</StyledTextRegular> : null}
    </StyledToastContainer>
  ),
};
type ToastData = {
  type: string;
  text1: string;
  text2?: string;
  onPress?: () => void;
  onShow?: () => void;
  onHide?: () => void;
};
export const showToast = (config: ToastData) => {
  const {type, text1, text2, onPress, onShow, onHide} = config;
  Toast.show({
    type: type as ToastTypes,
    text1: text1,
    text2: text2 ? text2 : '',
    visibilityTime: 3000,
    autoHide: true,
    topOffset: 30,
    position: 'bottom',
    bottomOffset: 30,
    props: {},
    onShow: () => {
      onShow && onShow();
    },
    onHide: () => {
      onHide && onHide();
    },
    onPress: () => {
      onPress && onPress();
    },
  });
};
