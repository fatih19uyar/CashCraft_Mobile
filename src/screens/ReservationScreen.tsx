import React, {useState} from 'react';
import Background from '../components/Background';
import TopBarPage from '../components/TopBarPage';
import {ReservationDetail} from '../types/type';
import {reservationDetails} from '../values/values';
import ReservationDetailsForm from '../screenForms/ReservationScreen/ReservationDetailsForm';
import ReservationScreenForm from '../screenForms/ReservationScreen/ReservationScreenForm';
import NewReservationForm from '../screenForms/ReservationScreen/NewReservationForm';

type Props = {navigation: any};

const ReservationScreen: React.FC<Props> = (props: Props) => {
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
      setSelectedReservation(undefined);
    }
  };

  const onSelected = (reservation: ReservationDetail) => {
    console.log('selected reservation', reservation);
    setSmallText('İşlem Detayı');
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

  const onPressNewReservation = () => {
    console.log('yeni');
    setCurrentForm('NewReservation');
    setSmallText('İşlem Ekle');
  };

  return (
    <Background imageSet={1}>
      <TopBarPage
        onGoBack={goBack}
        onTobBarItem={{
          bigText: 'Rezervasyonlarım',
          smallText: smallText,
        }}
      />
      {renderForm()}
    </Background>
  );
};

export default ReservationScreen;
