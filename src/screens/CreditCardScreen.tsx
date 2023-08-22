import React, {useState, useEffect} from 'react';
import Background from '../components/Background';
import TopBarPage from '../components/TopBarPage';
import TextView from '../components/TextView';
import themes from '../utils/themes';
import MyView from '../components/MyView';
import CreditCardScreenForm from '../screenForms/CreditCardScreen/CreditCardScreenForm';
import NewBankCardScreenForm from '../screenForms/MyCardScreen/NewBankCardScreenForm';

type Props = {navigation: any};

const CreditCardScreen: React.FC<Props> = (props: Props) => {
  const [currentForm, setCurrentForm] = useState<number>(0);
  const goBack = () => {
    props.navigation.goBack();
  };
  const newCardData = (values: any) => {
    console.log('values', values);
    props.navigation.navigate('BankCardDirectedScreen');
  };

  const renderForm = () => {
    switch (currentForm) {
      case 1:
        return <NewBankCardScreenForm goToNextForm={newCardData} />;
      default:
        return (
          <CreditCardScreenForm
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
          bigText: 'Kredi Kartlarım',
          smallText: '',
        }}
      />
      {renderForm()}
    </Background>
  );
};

export default CreditCardScreen;
