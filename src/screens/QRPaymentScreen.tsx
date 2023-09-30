import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Background from '../components/Background';
import QRPaymentScreenFormFirst from '../screenForms/QRPaymentForm/QRPaymentScreenFormFirst';
import TopBarPage from '../components/TopBarPage';
import QRPayNowScreenForm from '../screenForms/QRPaymentForm/QRPayNowScreenForm';
import SelectPaymentTypeForm from '../screenForms/QRPaymentForm/SelectPaymentTypeForm';
import {payment} from '../values/values';
import NewBankCardScreenForm from '../screenForms/MyCardScreen/NewBankCardScreenForm';
import {useTranslation} from 'react-i18next';

type Props = {
  navigation: {
    goBack: () => void;
    replace: (name: string) => void;
    navigate: (name: string) => void;
  };
};

const QRPaymentScreen = (props: Props) => {
  const {t} = useTranslation();
  const [currentForm, setCurrentForm] = useState('');
  const [smallText, setSmallText] = useState('');
  const [getPassword, setGetPassword] = useState('');
  const goBack = () => {
    if (currentForm === '') {
      props.navigation.goBack();
    } else {
      setCurrentForm('');
      setSmallText('');
    }
  };
  const goNext = () => {
    if (currentForm === '') {
      setSmallText(t('Pay'));
      setCurrentForm('QRPayNowScreen');
    } else if (currentForm === 'QRPayNowScreen' && getPassword.length === 6) {
      setSmallText(t('SelectPaymentMethod'));
      setCurrentForm('SelectPaymentType');
    } else if (currentForm === 'AddNewCardScreen') {
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
  const renderForm = () => {
    switch (currentForm) {
      case 'AddNewCardScreen':
        return <NewBankCardScreenForm goToNextForm={goNext} />;
      case 'SelectPaymentType':
        return (
          <SelectPaymentTypeForm
            goNext={goNext}
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
            readPayment={payment}
          />
        );
      default:
        return <QRPaymentScreenFormFirst goNext={goNext} />;
    }
  };
  return (
    <Background imageSet={1}>
      <TopBarPage
        onGoBack={goBack}
        onTobBarItem={{
          bigText: t('QRTransactions'),
          smallText: smallText,
        }}
      />
      {renderForm()}
    </Background>
  );
};

export default QRPaymentScreen;
