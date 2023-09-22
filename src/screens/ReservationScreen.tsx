import React, {useState} from 'react';
import Background from '../components/Background';
import TopBarPage from '../components/TopBarPage';
import {ReservationDetail} from '../types/type';
import {reservationDetails} from '../values/values';
import ReservationDetailsForm from '../screenForms/ReservationScreen/ReservationDetailsForm';
import ReservationScreenForm from '../screenForms/ReservationScreen/ReservationScreenForm';
import NewReservationForm from '../screenForms/ReservationScreen/NewReservationForm';
import AddedNewReservationForm from '../screenForms/ReservationScreen/AddedNewReservationForm';
import {useTranslation} from 'react-i18next';

type Props = {navigation: any};

const ReservationScreen: React.FC<Props> = (props: Props) => {
  const {t} = useTranslation();
  const [smallText, setSmallText] = useState('');
  const [currentForm, setCurrentForm] = useState('');
  const [selectedReservation, setSelectedReservation] = useState<
    ReservationDetail | undefined
  >(undefined);

  const goBack = () => {
    if (currentForm === '') {
      props.navigation.goBack();
    } else {
      setCurrentForm('');
    }
  };

  const onSelected = (reservation: ReservationDetail) => {
    console.log('selected reservation', reservation);
    setSmallText(t('TransactionDetail'));
    setCurrentForm('ReservationDetails');
    setSelectedReservation(reservation);
  };

  const onDelete = (id: number) => {
    const updatedReservations = reservationDetails.filter(
      item => item.id !== id,
    );
    setCurrentForm('');
    setSelectedReservation(undefined);
    console.log('Updated reservations:', updatedReservations);
  };
  const onAdd = (id: number) => {
    console.log(id);
    setCurrentForm('');
  };
  const onPressNewReservation = () => {
    setCurrentForm('NewReservation');
    setSmallText(t('AddingTransaction'));
    setTimeout(() => {
      setCurrentForm('AddNewReservation');
    }, 3000);
  };

  const renderForm = () => {
    switch (currentForm) {
      case 'ReservationDetails':
        return (
          <ReservationDetailsForm
            reservationDetail={selectedReservation}
            onDelete={onDelete}
          />
        );
      case 'NewReservation':
        return <NewReservationForm />;
      case 'AddNewReservation':
        return (
          <AddedNewReservationForm
            onAdd={onAdd}
            reservationDetail={undefined}
          />
        );
      default:
        return (
          <ReservationScreenForm
            onSelected={onSelected}
            reservetionsData={reservationDetails}
            onPressNewReservation={onPressNewReservation}
          />
        );
    }
  };

  return (
    <>
      <Background imageSet={1}>
        <TopBarPage
          onGoBack={goBack}
          onTobBarItem={{
            bigText: t('MyReservations'),
            smallText: smallText,
          }}
        />
        {renderForm()}
      </Background>
    </>
  );
};

export default ReservationScreen;
