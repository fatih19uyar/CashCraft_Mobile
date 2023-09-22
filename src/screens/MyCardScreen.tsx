import React, {useState} from 'react';
import Background from '../components/Background';
import BankCardScreenForm from '../screenForms/MyCardScreen/BankCardScreenForm';
import TopBarPage from '../components/TopBarPage';
import NewBankCardScreenForm from '../screenForms/MyCardScreen/NewBankCardScreenForm';
import {CardData} from '../types/type';
import CardDetailsScreenForm from '../screenForms/MyCardScreen/CardDetailsScreenForm';
import {useTranslation} from 'react-i18next';

type Props = {navigation: any};

const BankCardScreen = (props: Props) => {
  const {t} = useTranslation();
  const [smallText, setSmallText] = useState(t('MyBankCards'));
  const [currentForm, setCurrentForm] = useState('');
  const [updateNickNamePopup, setUpdateNickNamePopup] = useState(false);

  const [card, setCard] = useState<CardData>({
    cardName: '',
    cardNumber: '',
    cardExpiration: '',
    cardType: 'master',
    cardNickName: '',
  });

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
  const selectedCard = (values: any) => {
    setCard(values);
    console.log('selectedCard', values);
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
          cardData={card}
          goUpdateNickName={goUpdateNickName}
          visibleUpdateNickName={updateNickNamePopup}
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
          bigText: t('MyRegisteredCards'),
          smallText: smallText,
        }}
      />
      {content}
    </Background>
  );
};

export default BankCardScreen;
