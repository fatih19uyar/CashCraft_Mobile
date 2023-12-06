import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from './useStore';
import {shallowEqual} from 'react-redux';
import {getUser} from '../redux/slice/userSlice';

export default function useUser() {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(
    state => ({
      user: state.userInfo.user,
    }),
    shallowEqual,
  );
  useEffect(() => {
    if (user === null) dispatch(getUser());
  }, [user]);
  const handleRefreshUser = () => {
    dispatch(getUser());
  };
  return {
    user,
    handleRefreshUser,
  };
}
