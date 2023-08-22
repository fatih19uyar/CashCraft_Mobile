import React, {useState} from 'react';
import Background from '../components/Background';
import BankCardScreenForm from '../screenForms/MyCardScreen/BankCardScreenForm';
import TopBarPage from '../components/TopBarPage';
import NewBankCardScreenForm from '../screenForms/MyCardScreen/NewBankCardScreenForm';
import {CardData} from '../types/type';
import CardDetailsScreenForm from '../screenForms/MyCardScreen/CardDetailsScreenForm';

type Props = {navigation: any};

const BankCardScreen = (props: Props) => {
  const [smallText, setSmallText] = useState('Banka Kartlarım');
  const [currentForm, setCurrentForm] = useState('');
  const [card, setCard] = useState<CardData>({
    cardName: '',
    cardNumber: '',
    cardExpiration: '',
    cardType: 'master',
  });

  const goBack = () => {
    props.navigation.goBack();
  };

  const newCardData = (values: any) => {
    console.log('values', values);
    props.navigation.navigate('BankCardDirectedScreen');
  };

  const nextForm = (screenName: string) => {
    if (screenName === 'NewCard') setSmallText('Banka Kartı Ekleme');
    setCurrentForm(screenName);
  };
  const selectedCard = (values: any) => {
    setCard(values);
    console.log('selectedCard', values);
    setCurrentForm('CardDetails');
  };

  let content = null;

  switch (currentForm) {
    case 'NewCard':
      content = <NewBankCardScreenForm goToNextForm={newCardData} />;
      break;
    case 'CardDetails':
      content = (
        <CardDetailsScreenForm
          goToNextForm={() => console.log('details')}
          cardData={card}
        />
      );
      break;
    default:
      content = (
        <BankCardScreenForm onPress={nextForm} onPressCard={selectedCard} />
      );
      break;
  }

  return (
    <Background imageSet={1}>
      <TopBarPage
        onGoBack={goBack}
        onTobBarItem={{
          bigText: 'Kayıtlı Kartlarım',
          smallText: smallText,
        }}
      />
      {content}
    </Background>
  );
};

export default BankCardScreen;
