import React, {useEffect, useState} from 'react';
import WelcomeScreenForm from '../screenForms/WelcomeScreenForm';
import LoadingScreen from '../components/LoadingScreen';

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
      <WelcomeScreenForm
        onSign={() => navigation.navigate('LoginScreen')}
        onRegister={() => navigation.navigate('RegisterScreen')}
      />
      <LoadingScreen visible={loading} />
    </>
  );
};

export default WelcomeScreen;
