import React, {useState} from 'react';
import HomeScreenForm from '../screenForms/HomeScreenForm';
import {AppDispatch} from '../redux/stores';
import {useDispatch} from 'react-redux';
import {logOut} from '../redux/slice/authReducer';
import ButtonModal from '../components/ProfileMenu';

type Props = {navigation: any};

const HomeScreen = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const [isMenuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  const onLogOut = () => {
    dispatch(logOut());
  };
  return (
    <>
      <HomeScreenForm onProfile={toggleMenu} />
      <ButtonModal
        onVisible={isMenuVisible}
        onCloseModal={toggleMenu}
        onPressButton={() => {}}
      />
    </>
  );
};

export default HomeScreen;
