import React, {useState} from 'react';
import Background from '../components/Background';
import TopBarPage from '../components/TopBarPage';
import {ReservationDetail} from '../types/type';
import {reservationDetails} from '../values/values';
import ReservationDetailsForm from '../screenForms/ReservationScreen/ReservationDetailsForm';
import ReservationScreenForm from '../screenForms/ReservationScreen/ReservationScreenForm';
import NewReservationForm from '../screenForms/ReservationScreen/NewReservationForm';
import AddedNewReservationForm from '../screenForms/ReservationScreen/AddedNewReservationForm';

type Props = {navigation: any};

const ReservationScreen: React.FC<Props> = (props: Props) => {
  const [smallText, setSmallText] = useState('');
  const [currentForm, setCurrentForm] = useState('');
  const [selectedReservation, setSelectedReservation] = useState<
    ReservationDetail | undefined
  >(undefined);

  const goBack = () => {
    console.log('aa', currentForm);
    if (currentForm === '') {
      props.navigation.goBack();
    } else {
      setCurrentForm('');
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
  const onAdd = (id: number) => {
    console.log(id);
    setCurrentForm('');
  };
  const onPressNewReservation = () => {
    setCurrentForm('NewReservation');
    setSmallText('İşlem Ekle');
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
            bigText: 'Rezervasyonlarım',
            smallText: smallText,
          }}
        />
        {renderForm()}
      </Background>
    </>
  );
};

export default ReservationScreen;
