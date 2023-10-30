import React, {useEffect} from 'react';
import WelcomeScreenForm from '../screenForms/WelcomeScreenForm';
import Background from '../components/Background';
import {useAppDispatch} from '../hooks/useStore';
import {loadingSet} from '../redux/slice/navigationSlice';

type WelcomeScreenProps = {
  navigation: {
    goBack: () => void;
    replace: (name: string) => void;
    navigate: (name: string) => void;
  };
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({navigation}) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadingSet({loading: true}));
    setTimeout(() => {
      dispatch(loadingSet({loading: false}));
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
    </>
  );
};

export default WelcomeScreen;
