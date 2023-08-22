import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Background from '../components/Background';
import TopBarPage from '../components/TopBarPage';
import TextView from '../components/TextView';
import themes from '../utils/themes';
import MyView from '../components/MyView';
import CreditCardScreenForm from '../screenForms/CreditCardScreen/CreditCardScreenForm';

type Props = {navigation: any};

const CreditCardScreen: React.FC<Props> = (props: Props) => {
  const [currentForm, setCurrentForm] = useState<number>(0);
  const goBack = () => {
    props.navigation.navigate('Cüzdan');
  };

  const renderForm = () => {
    switch (currentForm) {
      case 1:
        return (
          <MyView>
            <TextView
              textColor={themes.light.colors.text}
              textSize={20}
              text={'Banka ödeme ekranına yönlendiriliyorsunuz.'}
              textStyle={'400'}
              textMargin={{top: 10, bottom: 5}}
            />
          </MyView>
        );
      default:
        return <CreditCardScreenForm onPress={() => {}} />;
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
