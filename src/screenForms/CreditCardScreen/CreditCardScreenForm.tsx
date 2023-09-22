import React from 'react';
import TextView from '../../components/TextView';
import MyView from '../../components/MyView';
import {SafeAreaView} from 'react-native';
import PressButton from '../../components/PressButton';
import {useTranslation} from 'react-i18next';

type Props = {onPress: (values: string) => void};

const CreditCardScreenForm = (props: Props) => {
  const {t} = useTranslation();
  return (
    <>
      <MyView>
        <TextView
          textColor={'black'}
          textSize={18}
          text={t('NoFoundBankCard')}
          textStyle={'300'}
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
          text={t('AddNewBankCard')}
          mode="Button2"
          borderStatus={false}
        />
      </SafeAreaView>
    </>
  );
};

export default CreditCardScreenForm;
