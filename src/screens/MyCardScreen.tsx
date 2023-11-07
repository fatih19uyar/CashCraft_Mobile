import React, {useState} from 'react';
import Background from '../components/Background';
import BankCardScreenForm from '../screenForms/MyCardScreen/BankCardScreenForm';
import TopBarPage from '../components/TopBarPage';
import NewBankCardScreenForm from '../screenForms/MyCardScreen/NewBankCardScreenForm';
import {CardData, CardStyle} from '../types/type';
import CardDetailsScreenForm from '../screenForms/MyCardScreen/CardDetailsScreenForm';
import {useTranslation} from 'react-i18next';
import useCards from '../hooks/useCards';

type Props = {
  navigation: {
    goBack: () => void;
    replace: (name: string) => void;
    navigate: (name: string) => void;
  };
};

const BankCardScreen = (props: Props) => {
  const {t} = useTranslation();
  const [smallText, setSmallText] = useState(t('MyBankCards'));
  const [currentForm, setCurrentForm] = useState('');
  const [updateNickNamePopup, setUpdateNickNamePopup] = useState(false);
  const {cards, selectedCard, handleSelectCard} = useCards();

  const filterCards = (cards: CardData[], cardStyle: CardStyle) => {
    const bankCards = cards.filter(card => card.cardStyle === cardStyle);
    return bankCards;
  };

  const goBack = () => {
    props.navigation.goBack();
  };

  const newCardData = (values: any) => {
    console.log('values', values);
    setCurrentForm('');
    props.navigation.goBack();
    props.navigation.navigate('BankCardDirectedScreen');
  };

  const nextForm = (screenName: string) => {
    if (screenName === 'NewCard') setSmallText(t('AddingBankCard'));
    setCurrentForm(screenName);
  };
  const handleSelectedCard = (values: CardData) => {
    handleSelectCard(values);
    setCurrentForm('CardDetails');
  };
  const goUpdateNickName = (values: any) => {
    console.log(values.nickName);
    values.nickName === undefined
      ? setUpdateNickNamePopup(true)
      : console.log('nick name', values);
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
          cardData={selectedCard}
          goUpdateNickName={goUpdateNickName}
          visibleUpdateNickName={updateNickNamePopup}
        />
      );
      break;
    default:
      content = (
        <BankCardScreenForm
          cards={filterCards(cards, CardStyle.BANK)}
          onPress={nextForm}
          onPressCard={handleSelectedCard}
        />
      );
      break;
  }

  return (
    <Background imageSet={1}>
      <TopBarPage
        onGoBack={goBack}
        onTobBarItem={{
          bigText: t('MyRegisteredCards'),
          smallText: smallText,
        }}
      />
      {content}
    </Background>
  );
};

export default BankCardScreen;
