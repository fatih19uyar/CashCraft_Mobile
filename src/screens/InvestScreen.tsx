import React, {useState} from 'react';
import Background from '../components/Background';
import InvestScreenFormFirst from '../screenForms/InvestScreenForm/InvestScreenFormFirst';
import TopBarPage from '../components/TopBarPage';
import {CardData} from '../types/type';
import InvestScreenFormSecond from '../screenForms/InvestScreenForm/InvestScreenFormSecond';
import InvestScreenFormThird from '../screenForms/InvestScreenForm/InvestScreenFormThird';
import {useTranslation} from 'react-i18next';
import useWalletCard from '../hooks/useWalletCard';
import WalletCardService from '../services/WalletCardService';
import {useAppDispatch} from '../hooks/useStore';
import {loadingSet} from '../redux/slice/navigationSlice';

type Props = {
  navigation: {
    goBack: () => void;
    replace: (name: string) => void;
    navigate: (name: string) => void;
  };
};

const InvestScreen = (props: Props) => {
  const {t} = useTranslation();
  const [currentForm, setCurrentForm] = useState(1);
  const [topBarSmallText, setTopBarSmallText] = useState(t('Deposit'));
  const [card, setCard] = useState<CardData>();
  const {walletCard} = useWalletCard();
  const dispatch = useAppDispatch();

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
        return (
          <InvestScreenFormSecond
            walletCard={walletCard}
            goNextForm={goNextForm}
          />
        );
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
    setTopBarSmallText(t('AmountDetermination'));
  };
  const goBack = () => {
    props.navigation.goBack();
  };
  const goDirectBank = async () => {
    dispatch(loadingSet({loading: true}));
    WalletCardService.updateWalletCardBalance(10, '+')
      .then(() => {
        props.navigation.navigate('BankCardDirectedScreen');
        dispatch(loadingSet({loading: false}));
        setCurrentForm(1);
      })
      .catch(() => {
        console.log('Bakiye Yükleme Sorunu');
        setCurrentForm(1);
      });
  };
  const goNextForm = () => {
    setCurrentForm(currentForm + 1);
    currentForm == 2 ? setTopBarSmallText(t('TransactionConfirmation')) : null;
  };
  return (
    <Background imageSet={1}>
      <TopBarPage
        onGoBack={goBack}
        onTobBarItem={{
          bigText: t('Deposit'),
          smallText: topBarSmallText,
        }}
      />
      {renderForm()}
    </Background>
  );
};

export default InvestScreen;
