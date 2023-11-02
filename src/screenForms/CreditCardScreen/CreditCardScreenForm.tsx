import React from 'react';
import TextView from '../../components/TextView';
import MyView from '../../components/MyView';
import {SafeAreaView} from 'react-native';
import PressButton from '../../components/PressButton';
import {useTranslation} from 'react-i18next';
import themes from '../../utils/themes';
import CardList from '../../components/CardList';
import {CardData, CardStyle} from '../../types/type';

type Props = {
  onPress: (values: string) => void;
  cards: CardData[];
  onPressCard: (values: any) => void;
};

const CreditCardScreenForm = (props: Props) => {
  const {t} = useTranslation();
  return (
    <>
      <MyView>
        {props.cards.length > 0 ? (
          <CardList
            cardStyle={'credit' as CardStyle}
            cardData={props.cards}
            onItemPress={props.onPressCard}
          />
        ) : (
          <TextView
            style={{
              color: themes.light.colors.text,
              fontSize: themes.light.fontSize.medium + 2,
              fontWeight: '300',
              marginTop: themes.light.textMargin.top.small,
            }}>
            {t('NoFoundBankCard')}
          </TextView>
        )}
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
