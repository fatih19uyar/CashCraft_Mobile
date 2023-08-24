import {View, Text} from 'react-native';
import React from 'react';
import {CardData} from '../../types/type';
import MyView from '../../components/MyView';
import TextView from '../../components/TextView';
import PressButton from '../../components/PressButton';
import {SafeAreaView} from 'react-native-safe-area-context';

interface InvestScreenFormSecondProps {
  goNextForm: () => void;
}

const InvestScreenFormSecond: React.FC<InvestScreenFormSecondProps> = ({
  goNextForm,
}) => {
  return (
    <>
      <MyView>
        <TextView
          textColor={'black'}
          textSize={14}
          text={'En az ₺10 yükleme yapabilirsin.'}
          textStyle={'300'}
          textMargin={{top: 10, bottom: 0}}
        />
        <TextView
          textColor={'black'}
          textSize={40}
          text={'₺ _ _,_ _'}
          textStyle={'500'}
          textMargin={{top: 10, bottom: 0}}
        />
        <TextView
          textColor={'black'}
          textSize={14}
          text={'Cüzdan Bakiyen: 100.58₺'}
          textStyle={'400'}
          textMargin={{top: 10, bottom: 0}}
        />
        <TextView
          textColor={'black'}
          textSize={40}
          text={'₺ 50,00'}
          textStyle={'500'}
          textMargin={{top: 10, bottom: 100}}
        />
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
