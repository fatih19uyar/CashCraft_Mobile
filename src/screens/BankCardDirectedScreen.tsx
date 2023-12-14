import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Background from '../components/Background';
import TextView from '../components/TextView';
import themes from '../utils/themes';
import MyView from '../components/MyView';
import PressButton from '../components/PressButton';
import SuccesAddCardForm from '../screenForms/MyCardScreen/SuccesAddCardForm';
import UnSuccesAddCardForm from '../screenForms/MyCardScreen/UnSuccesAddCardForm';
import {useTranslation} from 'react-i18next';

type Props = {
  navigation: {
    goBack: () => void;
    replace: (name: string) => void;
    navigate: (name: string) => void;
  };
};

const BankCardDirectedScreen: React.FC<Props> = (props: Props) => {
  const [currentForm, setCurrentForm] = useState<number>(1);
  const {t} = useTranslation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentForm(2);
    }, 3500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const goSuccess = () => {
    setCurrentForm(currentForm + 1);
  };
  const goUnSuccess = () => {
    setCurrentForm(5);
  };
  const goToHome = () => {
    props.navigation.navigate(t('HomePage'));
  };

  const renderForm = () => {
    switch (currentForm) {
      case 1:
        return (
          <MyView>
            <TextView
              style={{
                color: themes.light.colors.text,
                fontSize: themes.light.fontSize.large,
                fontWeight: '400',
                marginBottom: themes.light.textMargin.bottom.small,
                marginTop: themes.light.textMargin.top.medium,
              }}>
              {'Banka ödeme ekranına yönlendiriliyorsunuz.'}
            </TextView>
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
                style={{
                  color: themes.light.colors.text,
                  fontSize: themes.light.fontSize.large,
                  fontWeight: '400',
                  marginBottom: themes.light.textMargin.bottom.small,
                  marginTop: themes.light.textMargin.top.medium,
                }}>
                {'BANKA ÖDEME EKRANI'}
              </TextView>

              <TextView
                style={{
                  color: themes.light.colors.text,
                  fontSize: themes.light.fontSize.medium,
                  fontWeight: '200',
                  marginBottom: themes.light.textMargin.bottom.small,
                  marginTop: themes.light.textMargin.top.medium,
                }}>
                {'Biz bunun için bir ekran tasarlamayacağız.' +
                  'Bankadan gelen iframe direkt olarak ekrana yansıtılacaktır'}
              </TextView>

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
              style={{
                color: themes.light.colors.text,
                fontSize: themes.light.fontSize.large,
                fontWeight: '400',
                marginBottom: themes.light.textMargin.bottom.small,
                marginTop: themes.light.textMargin.top.medium,
              }}>
              {'Banka ödeme ekranına yönlendiriliyorsunuz.'}
            </TextView>
          </MyView>
        );
    }
  };

  return <Background imageSet={1}>{renderForm()}</Background>;
};

export default BankCardDirectedScreen;
