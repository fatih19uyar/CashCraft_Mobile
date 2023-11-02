import React, {useState} from 'react';
import Background from '../components/Background';
import TopBarPage from '../components/TopBarPage';
import CreditCardScreenForm from '../screenForms/CreditCardScreen/CreditCardScreenForm';
import NewBankCardScreenForm from '../screenForms/MyCardScreen/NewBankCardScreenForm';
import {useTranslation} from 'react-i18next';
import useCards from '../hooks/useCards';
import {CardData, CardStyle} from '../types/type';

type Props = {
  navigation: {
    goBack: () => void;
    replace: (name: string) => void;
    navigate: (name: string) => void;
  };
};

const CreditCardScreen: React.FC<Props> = (props: Props) => {
  const [currentForm, setCurrentForm] = useState<number>(0);
  const {cards, selectedCard, handleSelectCard} = useCards();
  const filterCards = (cards: CardData[], cardStyle: CardStyle) => {
    const bankCards = cards.filter(card => card.cardStyle === cardStyle);
    return bankCards;
  };
  const {t} = useTranslation();
  const goBack = () => {
    props.navigation.goBack();
  };
  const newCardData = (values: any) => {
    console.log('values', values);
    props.navigation.navigate('BankCardDirectedScreen');
  };
  const handleSelectedCard = (values: CardData) => {
    handleSelectCard(values);
    console.log('selectedCard', values);
  };

  const renderForm = () => {
    switch (currentForm) {
      case 1:
        return <NewBankCardScreenForm goToNextForm={newCardData} />;
      default:
        return (
          <CreditCardScreenForm
            cards={filterCards(cards, CardStyle.CREDIT)}
            onPressCard={handleSelectedCard}
            onPress={() => {
              setCurrentForm(currentForm + 1);
            }}
          />
        );
    }
  };

  return (
    <Background imageSet={1}>
      <TopBarPage
        onGoBack={goBack}
        onTobBarItem={{
          bigText: t('MyCreditCards'),
        }}
      />
      {renderForm()}
    </Background>
  );
};

export default CreditCardScreen;
