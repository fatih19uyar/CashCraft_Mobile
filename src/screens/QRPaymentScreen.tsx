import React, {useState} from 'react';
import Background from '../components/Background';
import QRPaymentScreenFormFirst from '../screenForms/QRPaymentForm/QRPaymentScreenFormFirst';
import TopBarPage from '../components/TopBarPage';
import QRPayNowScreenForm from '../screenForms/QRPaymentForm/QRPayNowScreenForm';
import SelectPaymentTypeForm from '../screenForms/QRPaymentForm/SelectPaymentTypeForm';
import {transactionsMockData} from '../values/values';
import NewBankCardScreenForm from '../screenForms/MyCardScreen/NewBankCardScreenForm';
import {useTranslation} from 'react-i18next';
import {ToastTypes, showToast} from '../components/ToastMessage';
import {
  CardData,
  CardStyle,
  PaymentCardStyle,
  PaymentDetails,
  PopupMode,
  TransactionStatus,
} from '../types/type';
import CardSelectForm from '../screenForms/QRPaymentForm/CardSelectForm';
import useCards from '../hooks/useCards';
import ConfirmationPopup from '../components/ConfirmationPopup';
import PaymentService from '../services/PaymentService';
import {AppDispatch} from '../redux/stores';
import {useDispatch} from 'react-redux';
import {loadingSet} from '../redux/slice/navigationSlice';
import useTransactions from '../hooks/useTransactions';
import TransactionService from '../services/TransactionService';
import {useAppSelector} from '../hooks/useStore';

type Props = {
  navigation: {
    goBack: () => void;
    replace: (name: string) => void;
    navigate: (name: string) => void;
  };
};
type ExtendedCardStyle = CardStyle | PaymentCardStyle;

const QRPaymentScreen = (props: Props) => {
  const {t} = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const userId: string | null = useAppSelector(
    state => state.authReducer.userId,
  );
  const [currentForm, setCurrentForm] = useState('');
  const [backButton, setBackButton] = useState(false);

  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMode, setPopupMode] = useState<PopupMode>('paymentSuccess');

  const [smallText, setSmallText] = useState('');

  const [selectedCardStyle, setSelectedCardStyle] = useState<PaymentCardStyle>(
    PaymentCardStyle.BANK,
  );
  const [getPassword, setGetPassword] = useState('');
  const {cards, selectedCard, handleSelectCard} = useCards();
  const goBack = () => {
    if (currentForm === '') {
      props.navigation.goBack();
    } else if (currentForm === 'CardSelectFrom') {
      setCurrentForm('SelectPaymentType');
      setBackButton(false);
    } else {
      setCurrentForm('');
      setSmallText('');
      setBackButton(false);
    }
  };
  const goNext = () => {
    if (currentForm === 'QRPaymentScreenFormFirst' || currentForm === '') {
      setBackButton(true);
      setSmallText(t('Pay'));
      setCurrentForm('QRPayNowScreen');
    } else if (currentForm === 'QRPayNowScreen' && checkPassword(getPassword)) {
      setBackButton(false);
      setSmallText(t('SelectPaymentMethod'));
      setCurrentForm('SelectPaymentType');
    } else if (currentForm === 'AddNewCardScreen') {
      setBackButton(false);
      console.log(currentForm);
    }
  };
  const checkPassword = (password: string) => {
    if (password.length < 6) {
      const toastConfig = {
        type: 'fault' as ToastTypes,
        text1: 'Lütfen minimum 6 karakter giriniz.',
      };
      showToast(toastConfig);
      return false;
    } else {
      return true;
    }
  };

  const getPasswordFunc = (values: string) => {
    setGetPassword(values.toString());
  };
  const addNewCard = () => {
    if (currentForm === 'SelectPaymentType') {
      setCurrentForm('AddNewCardScreen');
      setSmallText(t('AddingCard'));
    }
  };
  const handleTimeout = () => {
    const toastConfig = {
      type: 'fault' as ToastTypes,
      text1: t('TimeOut'),
    };
    showToast(toastConfig);
    setTimeout(() => {
      setCurrentForm('');
      setBackButton(false);
    }, 1000);
  };
  const selectCard = (cardStyle: PaymentCardStyle) => {
    if (cardStyle !== PaymentCardStyle.ANOTHER) setSelectedCardStyle(cardStyle);
    setCurrentForm('CardSelectFrom');
    setBackButton(true);
  };
  const filterCards = (cards: CardData[], cardStyle: ExtendedCardStyle) => {
    const bankCards = cards.filter(card => card.cardStyle === cardStyle);
    return bankCards;
  };
  const payNow = async (selectCard: CardData) => {
    dispatch(loadingSet({loading: true}));
    PaymentService.payment({
      creditCardNumber: selectCard.cardNumber,
      cvv: '123',
      amount: transactionsMockData.price,
    })
      .then(res => {
        TransactionService.createTransaction({
          title: transactionsMockData.title,
          subtitle: transactionsMockData.subtitle,
          price: transactionsMockData.price,
          user: userId ? userId : 'error',
          currency: transactionsMockData.currency._id ?? '',
          card: '651ebfd578580e5f0b907ffa',
          status: TransactionStatus.COMPLETED,
        }).then(res => {
          setTimeout(() => {
            dispatch(loadingSet({loading: false}));
            props.navigation.navigate('BankCardDirectedScreen');
            setCurrentForm('QRPaymentScreenFormFirst');
          }, 2000);
        });
      })
      .catch(err => {
        const toastConfig = {
          type: 'fault' as ToastTypes,
          text1: 'Ödeme Hatası ' + err.meesage,
        };
        dispatch(loadingSet({loading: false}));
        showToast(toastConfig);
        setCurrentForm('QRPaymentScreenFormFirst');
        console.log(err);
      });
  };
  const popupOnConfirm = () => {
    setCurrentForm('QRPaymentScreenFormFirst');
    setPopupVisible(false);
    setBackButton(false);
  };
  const paymentData: PaymentDetails = {
    companyName: transactionsMockData.title,
    price: transactionsMockData.price,
    currency: transactionsMockData.currency.symbol ?? '',
  };
  const renderForm = () => {
    switch (currentForm) {
      case 'AddNewCardScreen':
        return <NewBankCardScreenForm goToNextForm={goNext} />;
      case 'SelectPaymentType':
        return (
          <SelectPaymentTypeForm
            selectCard={selectCard}
            readPayment={paymentData}
            addNewCard={addNewCard}
            handleTimeout={handleTimeout}
          />
        );
      case 'QRPaymentScreenFormFirst':
        return (
          <QRPaymentScreenFormFirst
            transaction={transactionsMockData}
            goNext={goNext}
          />
        );
      case 'QRPayNowScreen':
        return (
          <QRPayNowScreenForm
            goNext={goNext}
            getPassword={getPasswordFunc}
            handleTimeout={handleTimeout}
            readPayment={paymentData}
          />
        );
      case 'CardSelectFrom':
        return (
          <CardSelectForm
            onPressCard={payNow}
            cards={filterCards(cards, selectedCardStyle)}
            cardStyle={selectedCardStyle}
          />
        );
      default:
        return (
          <QRPaymentScreenFormFirst
            transaction={transactionsMockData}
            goNext={goNext}
          />
        );
    }
  };
  return (
    <>
      <Background imageSet={1}>
        {backButton ? (
          <TopBarPage
            onGoBack={goBack}
            onTobBarItem={{
              bigText: t('QRTransactions'),
              smallText: smallText,
            }}
          />
        ) : (
          <TopBarPage
            onTobBarItem={{
              bigText: t('QRTransactions'),
              smallText: smallText,
            }}
          />
        )}
        {renderForm()}
      </Background>
      <ConfirmationPopup
        isVisible={popupVisible}
        onCancel={() => {}}
        onConfirm={popupOnConfirm}
        mode={popupMode}
      />
    </>
  );
};

export default QRPaymentScreen;
