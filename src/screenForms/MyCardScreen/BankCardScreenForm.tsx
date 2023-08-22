import React from 'react';
import TextView from '../../components/TextView';
import MyView from '../../components/MyView';
import {SafeAreaView} from 'react-native';
import PressButton from '../../components/PressButton';
import CardList from '../../components/CardList';
import {sampleCardData} from '../../values/values';

type Props = {
  onPress: (values: string) => void;
  onPressCard: (values: any) => void;
};

const MyCardScreenForm = (props: Props) => {
  return (
    <>
      <MyView>
        {sampleCardData ? (
          <CardList cardData={sampleCardData} onItemPress={props.onPressCard} />
        ) : (
          <TextView
            textColor={'black'}
            textSize={18}
            text={'Idvlabs Cüzdan hesabına tanımlı banka kartın bulunmuyor.'}
            textStyle={'200'}
            textMargin={{top: 0, bottom: 0}}
          />
        )}
      </MyView>
      <SafeAreaView
        style={{
          width: '90%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <PressButton
          onPress={() => props.onPress('NewCard')}
          textColor="white"
          text="Yeni Banka Kartı Ekle"
          mode="Button2"
          borderStatus={false}
        />
      </SafeAreaView>
    </>
  );
};

export default MyCardScreenForm;
