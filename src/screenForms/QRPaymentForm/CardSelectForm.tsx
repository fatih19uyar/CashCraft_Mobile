import React from 'react';
import TextView from '../../components/TextView';
import MyView from '../../components/MyView';
import CardList from '../../components/CardList';
import {CardData, CardStyle, PaymentCardStyle} from '../../types/type';
import themes from '../../utils/themes';
import {useTranslation} from 'react-i18next';

type Props = {
  onPressCard: (values: CardData) => void;
  cards: CardData[];
  cardStyle: PaymentCardStyle;
};

const CardSelectForm = (props: Props) => {
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
    </>
  );
};

export default CardSelectForm;
