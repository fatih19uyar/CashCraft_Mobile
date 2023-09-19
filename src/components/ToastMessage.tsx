import React from 'react';
import {View, Text} from 'react-native';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import themes from '../utils/themes';

export const toastConfig = {
  success: ({text1, text2, props}: any) => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 20,
        height: 60,
        width: '90%',
        backgroundColor: themes.light.colors.toastColor.border.backgroundColor,
        borderLeftWidth: 20,
        borderRightWidth: 10,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 5,
        borderBottomEndRadius: 5,
        borderColor: themes.light.colors.toastColor.border.success,
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 15}}>{text1}</Text>
      <Text style={{fontWeight: '400', fontSize: 12}}>{text2}</Text>
    </View>
  ),
  fault: ({text1, text2, props}: any) => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 20,
        height: 60,
        width: '90%',
        backgroundColor: themes.light.colors.toastColor.border.backgroundColor,
        borderLeftWidth: 20,
        borderRightWidth: 10,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 5,
        borderBottomEndRadius: 5,
        borderColor: themes.light.colors.toastColor.border.error,
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 15}}>{text1}</Text>
      <Text style={{fontWeight: '400', fontSize: 12}}>{text2}</Text>
    </View>
  ),
  info: ({text1, text2, props}: any) => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 20,
        height: 60,
        width: '90%',
        backgroundColor: themes.light.colors.toastColor.border.backgroundColor,
        borderLeftWidth: 20,
        borderRightWidth: 10,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 5,
        borderBottomEndRadius: 5,
        borderColor: themes.light.colors.toastColor.border.info,
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 15}}>{text1}</Text>
      <Text style={{fontWeight: '400', fontSize: 12}}>{text2}</Text>
    </View>
  ),
};

export const showToast = (config: any) => {
  const {type, text1, text2, onPress, onShow, onHide} = config;

  Toast.show({
    type: type,
    text1: text1,
    text2: text2,
    visibilityTime: 3000,
    autoHide: true,
    topOffset: 30,
    position: 'bottom',
    bottomOffset: 30,
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
