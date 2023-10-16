import React, {useState} from 'react';
import Background from '../components/Background';
import DeleteWalletScreenFormFirst from '../screenForms/DeleteWallet/DeleteWalletScreenFormFirst';
import DeleteWalletScreenFormSecond from '../screenForms/DeleteWallet/DeleteWalletScreenFormSecond';
import DeleteWalletScreenFormThird from '../screenForms/DeleteWallet/DeleteWalletScreenFormThird';
import {AppDispatch} from '../redux/stores';
import {useDispatch} from 'react-redux';
import {reset} from 'redux-form';
import DeleteWalletScreenFormFourth from '../screenForms/DeleteWallet/DeleteWalletScreenFormFourth';
import {logOut} from '../redux/slice/authReducer';

type Props = {
  navigation: {
    goBack: () => void;
    replace: (name: string) => void;
    navigate: (name: string) => void;
  };
};

const DeleteWalletScreen = (props: Props) => {
  const [currentForm, setCurrentForm] = useState(1);
  const dispatch: AppDispatch = useDispatch();

  const goBack = () => {
    dispatch(reset('deleteWalletScreen'));
    props.navigation.goBack();
  };
  const goNext = () => {
    currentForm == 4 ? dispatch(logOut()) : setCurrentForm(currentForm + 1);
  };
  const passwordCheck = () => {
    setCurrentForm(currentForm + 1);
  };
  const renderForm = () => {
    switch (currentForm) {
      case 1:
        return <DeleteWalletScreenFormFirst goNext={goNext} goBack={goBack} />;
      case 2:
        return <DeleteWalletScreenFormSecond goNext={goNext} goBack={goBack} />;
      case 3:
        return (
          <DeleteWalletScreenFormThird goNext={passwordCheck} goBack={goBack} />
        );
      case 4:
        return <DeleteWalletScreenFormFourth goNext={goNext} />;

      default:
        return <DeleteWalletScreenFormFirst goNext={goNext} goBack={goBack} />;
    }
  };
  return (
    <>
      <Background imageSet={2}>{renderForm()}</Background>
    </>
  );
};

export default DeleteWalletScreen;
