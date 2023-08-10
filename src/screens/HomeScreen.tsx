import React, {useState} from 'react';
import HomeScreenForm from '../screenForms/HomeScreenForm';
import {AppDispatch} from '../redux/stores';
import {useDispatch} from 'react-redux';
import {logOut} from '../redux/slice/authReducer';
import ProfileMenu from '../components/ProfileMenu';

type Props = {navigation: any};

const HomeScreen = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const [isMenuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  const onPressButton = (screenName: string) => {
    switch (screenName) {
      case 'logout': {
        dispatch(logOut());
      }
      default: {
        props.navigation.navigate(screenName);
      }
    }
  };
  return (
    <>
      <HomeScreenForm onProfile={toggleMenu} />
      <ProfileMenu
        onVisible={isMenuVisible}
        onCloseModal={toggleMenu}
        onPressButton={onPressButton}
      />
    </>
  );
};

export default HomeScreen;
