import React from 'react';
import TextView from '../../components/TextView';
import MyView from '../../components/MyView';
import {SafeAreaView} from 'react-native';
import PressButton from '../../components/PressButton';

type Props = {onPress: (values: string) => void};

const CreditCardScreenForm = (props: Props) => {
  return (
    <>
      <MyView>
        <TextView
          textColor={'black'}
          textSize={18}
          text={'Idvlabs Cüzdan hesabına tanımlı banka kartın bulunmuyor.'}
          textStyle={'normal'}
          textMargin={{top: 0, bottom: 0}}
        />
      </MyView>
      <SafeAreaView
        style={{
          width: '90%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <PressButton
          onPress={() => props.onPress('NewCreditCard')}
          textColor="white"
          text="Yeni Banka Kartı Ekle"
          mode="Button2"
          borderStatus={false}
        />
      </SafeAreaView>
    </>
  );
};

export default CreditCardScreenForm;
