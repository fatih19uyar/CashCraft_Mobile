import React, {useState} from 'react';
import Background from '../components/Background';
import MyCardScreenForm from '../screenForms/MyCardScreen/MyCardScreenForm';
import TopBarPage from '../components/TopBarPage';
import NewBankCardScreenForm from '../screenForms/MyCardScreen/NewBankCardScreenForm';

type Props = {navigation: any};

const MyCardScreen = (props: Props) => {
  const [smallText, setSmallText] = useState('Banka Kartlarım');
  const [currentForm, setCurrentForm] = useState('');

  const goBack = () => {
    props.navigation.navigate('Cüzdan');
  };

  const newCardData = (values: any) => {
    console.log('values', values);
    setCurrentForm('DirectedBankCard');
    props.navigation.navigate('BankCardDirectedScreen');
  };

  const nextForm = (screenName: string) => {
    if (screenName === 'NewCard') setSmallText('Banka Kartı Ekleme');
    setCurrentForm(screenName);
  };

  let content = null;

  switch (currentForm) {
    case 'NewCard':
      content = <NewBankCardScreenForm goToNextForm={newCardData} />;
      break;
    default:
      content = <MyCardScreenForm onPress={nextForm} />;
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

export default MyCardScreen;
