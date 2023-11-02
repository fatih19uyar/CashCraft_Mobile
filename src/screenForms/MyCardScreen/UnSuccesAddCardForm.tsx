import {Image} from 'react-native';
import React from 'react';
import MyView from '../../components/MyView';
import TextView from '../../components/TextView';
import PressButton from '../../components/PressButton';
import themes from '../../utils/themes';
import {useTranslation} from 'react-i18next';

type Props = {onPress: () => void};

const UnSuccesAddCardForm = (props: Props) => {
  const {t} = useTranslation();
  return (
    <MyView>
      <TextView
        style={{
          color: themes.light.colors.text,
          fontSize: themes.light.fontSize.customeSize2 - 1,
          marginBottom: themes.light.textMargin.bottom.large,
          marginTop: themes.light.textMargin.top.extraLarge,
          fontWeight: '500',
        }}>
        {t('TransactionUnSuccessfull')}
      </TextView>
      <Image
        source={require('../../assets/alert.png')}
        style={{width: 100, height: 100, margin: 20}}
      />
      <TextView
        style={{
          color: themes.light.colors.text,
          fontSize: themes.light.fontSize.medium + 2,
          marginBottom: themes.light.textMargin.bottom.medium,
        }}>
        {t('PaymentFailedForCardBalance')}
      </TextView>
      <PressButton
        onPress={props.onPress}
        textColor="white"
        text="Ana Sayfaya Dön"
        mode="Button2"
        borderStatus={false}
      />
    </MyView>
  );
};

export default UnSuccesAddCardForm;
