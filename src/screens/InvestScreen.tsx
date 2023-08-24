import React, {useState} from 'react';
import Background from '../components/Background';
import InvestScreenFormFirst from '../screenForms/InvestScreenForm/InvestScreenFormFirst';
import TopBarPage from '../components/TopBarPage';
import {CardData} from '../types/type';
import InvestScreenFormSecond from '../screenForms/InvestScreenForm/InvestScreenFormSecond';
import InvestScreenFormThird from '../screenForms/InvestScreenForm/InvestScreenFormThird';

type Props = {navigation: any};

const InvestScreen = (props: Props) => {
  const [currentForm, setCurrentForm] = useState(1);
  const [topBarSmallText, setTopBarSmallText] = useState('Para Yatır');
  const [price, setPrice] = useState('');
  const [card, setCard] = useState<CardData>();
  const renderForm = () => {
    switch (currentForm) {
      case 1:
        return (
          <InvestScreenFormFirst
            goNewCard={goNextForm}
            selectedCard={selectedCard}
          />
        );
      case 2:
        return <InvestScreenFormSecond goNextForm={goNextForm} />;
      case 3:
        return (
          <InvestScreenFormThird
            goNextForm={goDirectBank}
            cardData={card}
            credit={'10.00'}
          />
        );
      default:
        <InvestScreenFormFirst
          goNewCard={goNextForm}
          selectedCard={selectedCard}
        />;
    }
  };
  const selectedCard = (card: CardData) => {
    console.log('selected', card);
    setCard(card);
    setCurrentForm(currentForm + 1);
    setTopBarSmallText('Tutar Belirleme');
  };
  const goBack = () => {
    props.navigation.goBack();
  };
  const goDirectBank = () => {
    props.navigation.navigate('BankCardDirectedScreen');
    setCurrentForm(1);
  };
  const goNextForm = () => {
    setCurrentForm(currentForm + 1);
    currentForm == 2 ? setTopBarSmallText('İşlem Onayı') : null;
  };
  return (
    <Background imageSet={1}>
      <TopBarPage
        onGoBack={goBack}
        onTobBarItem={{
          bigText: 'Para Yatır',
          smallText: topBarSmallText,
        }}
      />
      {renderForm()}
    </Background>
  );
};

export default InvestScreen;
