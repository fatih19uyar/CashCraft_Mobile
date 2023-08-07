import React from 'react';
import HomeScreenForm from '../screenForms/HomeScreenForm';
import {AppDispatch} from '../redux/stores';
import {useDispatch} from 'react-redux';
import {logOut} from '../redux/slice/authReducer';

type Props = {};

const HomeScreen = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();

  const onProfile = () => {
    dispatch(logOut());
  };
  return (
    <>
      <HomeScreenForm onProfile={onProfile} />
    </>
  );
};

export default HomeScreen;
