import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from './useStore';
import {shallowEqual} from 'react-redux';
import {CardState} from '../types/type';
import {getAllCards, setSelectedCard} from '../redux/slice/cardsSlice';

// tsrfc
export default function useCards() {
  const dispatch = useAppDispatch();
  const {cards, selectedCard} = useAppSelector(
    state => ({
      cards: state.cards.cards,
      selectedCard: state.cards.selectedCard,
    }),
    shallowEqual,
  );
  useEffect(() => {
    let attemptCount = 0;
    const fetchData = async () => {
      if (cards.length === 0 && attemptCount < 2) {
        await dispatch(getAllCards());
        attemptCount++;
        fetchData();
      }
    };

    // İlk kez useEffect çalıştığında fetchData fonksiyonunu çağır
    fetchData();
  }, [cards]);

  const handleSelectCard = (newCard: CardState['selectedCard']) => {
    dispatch(setSelectedCard(newCard));
  };
  return {cards, selectedCard, handleSelectCard};
}
