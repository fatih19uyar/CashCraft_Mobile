import React from 'react';
import TextView from '../../components/TextView';
import MyView from '../../components/MyView';
import {SafeAreaView} from 'react-native';
import PressButton from '../../components/PressButton';
import CardList from '../../components/CardList';
import {CardData, CardStyle} from '../../types/type';
import themes from '../../utils/themes';
import {useTranslation} from 'react-i18next';

type Props = {
  onPress: (values: string) => void;
  onPressCard: (values: any) => void;
  cards: CardData[];
};

const MyCardScreenForm = (props: Props) => {
  const {t} = useTranslation();
  return (
    <>
      <MyView>
        {props.cards.length > 0 ? (
          <CardList
            cardStyle={'bank' as CardStyle}
            cardData={props.cards}
            onItemPress={props.onPressCard}
          />
        ) : (
          <TextView
            style={{
              color: themes.light.colors.text,
              fontSize: themes.light.fontSize.medium,
              fontWeight: '200',
            }}>
            {t('EmptyBankCardText')}
          </TextView>
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
