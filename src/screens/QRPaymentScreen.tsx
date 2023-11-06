import React, {useState} from 'react';
import Background from '../components/Background';
import QRPaymentScreenFormFirst from '../screenForms/QRPaymentForm/QRPaymentScreenFormFirst';
import TopBarPage from '../components/TopBarPage';
import QRPayNowScreenForm from '../screenForms/QRPaymentForm/QRPayNowScreenForm';
import SelectPaymentTypeForm from '../screenForms/QRPaymentForm/SelectPaymentTypeForm';
import {payment} from '../values/values';
import NewBankCardScreenForm from '../screenForms/MyCardScreen/NewBankCardScreenForm';
import {useTranslation} from 'react-i18next';
import {ToastTypes, showToast} from '../components/ToastMessage';
import {CardData, CardStyle, PaymentCardStyle, PopupMode} from '../types/type';
import CardSelectForm from '../screenForms/QRPaymentForm/CardSelectForm';
import useCards from '../hooks/useCards';
import ConfirmationPopup from '../components/ConfirmationPopup';
import PaymentService from '../services/PaymentService';
import {AppDispatch} from '../redux/stores';
import {useDispatch} from 'react-redux';
import {loadingSet} from '../redux/slice/navigationSlice';

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

  const getPasswordFunc = (values: any) => {
    console.log('values', values);
    setGetPassword(values);
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
      text1: 'Süre Doldu...',
    };
    showToast(toastConfig);
    setTimeout(() => {
      setCurrentForm('');
      setBackButton(false);
    }, 1000);
  };
  const selectCard = (cardStyle: PaymentCardStyle) => {
    console.log(cardStyle);
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
    await PaymentService.payment({
      creditCardNumber: selectCard.cardNumber,
      cvv: '123',
      amount: '100',
    })
      .then(res => {
        setTimeout(() => {
          console.log('res', res.data);
          dispatch(loadingSet({loading: false}));
          setPopupMode('paymentSuccess');
          setPopupVisible(true);
        }, 2000);
      })
      .catch(err => {
        const toastConfig = {
          type: 'fault' as ToastTypes,
          text1: 'Ödeme Hatası' + err.meesage,
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

  const renderForm = () => {
    switch (currentForm) {
      case 'AddNewCardScreen':
        return <NewBankCardScreenForm goToNextForm={goNext} />;
      case 'SelectPaymentType':
        return (
          <SelectPaymentTypeForm
            selectCard={selectCard}
            readPayment={payment}
            addNewCard={addNewCard}
          />
        );
      case 'QRPaymentScreenFormFirst':
        return <QRPaymentScreenFormFirst goNext={goNext} />;
      case 'QRPayNowScreen':
        return (
          <QRPayNowScreenForm
            goNext={goNext}
            getPassword={getPasswordFunc}
            handleTimeout={handleTimeout}
            readPayment={payment}
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
        return <QRPaymentScreenFormFirst goNext={goNext} />;
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
        onResent={() => console.log('Gönderdik')}
        mode={popupMode}
      />
    </>
  );
};

export default QRPaymentScreen;
