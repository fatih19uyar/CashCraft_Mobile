import React, {useEffect, useState} from 'react';
import WelcomeScreenForm from '../screenForms/WelcomeScreenForm';
import LoadingScreen from '../components/LoadingScreen';
import Background from '../components/Background';

type WelcomeScreenProps = {navigation: any};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Background imageSet={2}>
        <WelcomeScreenForm
          onSign={() => navigation.navigate('LoginScreen')}
          onRegister={() => navigation.navigate('RegisterScreen')}
        />
      </Background>
      <LoadingScreen visible={loading} />
    </>
  );
};

export default WelcomeScreen;
