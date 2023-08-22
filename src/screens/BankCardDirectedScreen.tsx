import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Background from '../components/Background';
import TopBarPage from '../components/TopBarPage';
import TextView from '../components/TextView';
import themes from '../utils/themes';
import MyView from '../components/MyView';
import PressButton from '../components/PressButton';
import SuccesAddCardForm from '../screenForms/MyCardScreen/SuccesAddCardForm';
import UnSuccesAddCardForm from '../screenForms/MyCardScreen/UnSuccesAddCardForm';

type Props = {navigation: any};

const BankCardDirectedScreen: React.FC<Props> = (props: Props) => {
  const [currentForm, setCurrentForm] = useState<number>(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentForm(2);
    }, 3500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const goBack = () => {
    props.navigation.goBack();
  };
  const goSuccess = () => {
    setCurrentForm(currentForm + 1);
  };
  const goUnSuccess = () => {
    setCurrentForm(5);
  };
  const goToHome = () => {
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
      case 2:
        return (
          <MyView>
            <View
              style={{
                backgroundColor: themes.light.colors.viewBackgroundColor,
                alignItems: 'center',
              }}>
              <TextView
                textColor={themes.light.colors.text}
                textSize={20}
                text={'BANKA ÖDEME EKRANI'}
                textStyle={'400'}
                textMargin={{top: 10, bottom: 5}}
              />
              <TextView
                textColor={themes.light.colors.text}
                textSize={15}
                text={
                  'Biz bunun için bir ekran tasarlamayacağız.' +
                  'Bankadan gelen iframe direkt olarak ekrana yansıtılacaktır'
                }
                textStyle={'200'}
                textMargin={{top: 10, bottom: 5}}
              />
              <PressButton
                onPress={goSuccess}
                textColor={themes.light.colors.text1}
                text="Devam Et"
                mode="Button2"
                borderStatus={false}
              />
              <PressButton
                onPress={goUnSuccess}
                textColor={themes.light.colors.text1}
                text="Hata"
                mode="Button4"
                borderStatus={false}
              />
            </View>
          </MyView>
        );
      case 3:
        return <SuccesAddCardForm onPress={goToHome} />;
      case 5:
        return <UnSuccesAddCardForm onPress={goToHome} />;
      default:
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
    }
  };

  return (
    <Background imageSet={1}>
      <TopBarPage
        onGoBack={goBack}
        onTobBarItem={{
          bigText: 'Kayıtlı Kartlarım',
          smallText: 'Banka Kartı Ekleme',
        }}
      />
      {renderForm()}
    </Background>
  );
};

export default BankCardDirectedScreen;
