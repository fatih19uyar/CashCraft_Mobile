import {View, Text, Image} from 'react-native';
import React from 'react';
import MyView from '../../components/MyView';
import TextView from '../../components/TextView';
import PressButton from '../../components/PressButton';

type Props = {onPress: () => void};

const SuccesAddCardForm = (props: Props) => {
  return (
    <MyView>
      <TextView
        textColor={'black'}
        textSize={39}
        text={'İşlem Başarıyla Gerçekleşti'}
        textStyle={'500'}
        textMargin={{top: 100, bottom: 20}}
      />
      <Image
        source={require('../../assets/success-checkmark.png')}
        style={{width: 100, height: 100, margin: 20}}
      />
      <TextView
        textColor={'black'}
        textSize={18}
        text={
          'Banka kartı ekleme işlemi başarıyla gerçekleşti. Kayıtlı kartlarım menüsünden kart bilgilerine erişebilirsin.'
        }
        textStyle={'normal'}
        textMargin={{top: 0, bottom: 10}}
      />

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

export default SuccesAddCardForm;
