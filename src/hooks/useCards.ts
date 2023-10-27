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
    if (cards.length === 0) dispatch(getAllCards());
  }, [cards]);
  const handleSelectCard = (newCard: CardState['selectedCard']) => {
    dispatch(setSelectedCard(newCard));
  };
  return {cards, selectedCard, handleSelectCard};
}
