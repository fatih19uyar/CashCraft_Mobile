import React from 'react';
import MyView from '../../components/MyView';
import TextView from '../../components/TextView';
import PressButton from '../../components/PressButton';
import themes from '../../utils/themes';
import {WalletCardType} from '../../types/type';

interface InvestScreenFormSecondProps {
  goNextForm: () => void;
  walletCard: WalletCardType;
}

const InvestScreenFormSecond: React.FC<InvestScreenFormSecondProps> = ({
  goNextForm,
  walletCard,
}) => {
  return (
    <>
      <MyView>
        <TextView
          style={{
            color: themes.light.colors.text,
            fontSize: themes.light.fontSize.small + 2,
            marginBottom: themes.light.textMargin.bottom.xLarge + 20,
            marginTop: themes.light.textMargin.top.medium,
            fontWeight: '300',
          }}>
          En az ₺10 yükleme yapabilirsin.
        </TextView>
        <TextView
          style={{
            color: themes.light.colors.text,
            fontSize: themes.light.fontSize.customeSize2,
            marginTop: themes.light.textMargin.top.medium,
            fontWeight: '500',
          }}>
          ₺ 5 0,0 0
        </TextView>
        <TextView
          style={{
            color: themes.light.colors.text,
            fontSize: themes.light.fontSize.small + 2,
            marginTop: themes.light.textMargin.top.medium,
            marginBottom: themes.light.textMargin.bottom.extraLarge,
            fontWeight: '400',
          }}>
          Cüzdan Bakiyen: {walletCard.balance + ' ' + walletCard.currency}
        </TextView>

        <PressButton
          onPress={goNextForm}
          textColor="white"
          text="Devam Et"
          mode="Button2"
          borderStatus={false}
        />
      </MyView>
    </>
  );
};

export default InvestScreenFormSecond;
