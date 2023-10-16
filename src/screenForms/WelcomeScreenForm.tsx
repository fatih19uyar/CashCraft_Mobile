import {Image, SafeAreaView} from 'react-native';
import React from 'react';
import PressButton from '../components/PressButton';
import TextView from '../components/TextView';
import MyView from '../components/MyView';
import {useTranslation} from 'react-i18next';

type WelcomeScreenFormProps = {
  onSign: () => void;
  onRegister: () => void;
};

const WelcomeScreenForm = (props: WelcomeScreenFormProps) => {
  const {t, i18n} = useTranslation();
  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'tr' : 'en'; // Dil geçişi yap
    i18n.changeLanguage(newLanguage); // Dil değiştir
  };

  return (
    <>
      <MyView>
        <Image
          source={require('../assets/idvlabs-logo.png')}
          style={{width: 200, height: 52, marginBottom: 20}}
        />
        <TextView
          textColor={'black'}
          textSize={18}
          text={t('WelcomeScreenFormHeaderText')}
          textStyle={'500'}
          textMargin={{top: 20, bottom: 100}}
        />
        <PressButton
          textColor={'black'}
          mode={'Button1'}
          text={t('Login')}
          onPress={props.onSign}
          borderStatus={false}
        />
        <PressButton
          textColor={'white'}
          mode={'Button2'}
          text={t('Register')}
          onPress={props.onRegister}
          borderStatus={false}
        />
      </MyView>
      <SafeAreaView style={{alignItems: 'center'}}>
        <PressButton
          onPress={toggleLanguage}
          textColor="black"
          text={t('changeLanguage')}
          mode="TextButton"
          borderStatus={true}
        />
      </SafeAreaView>
    </>
  );
};

export default WelcomeScreenForm;
