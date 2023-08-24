import React from 'react';
import MyView from '../../components/MyView';
import {styled} from 'styled-components/native';

interface NewReservationFormProps {}

const NewReservationForm: React.FC<NewReservationFormProps> = ({}) => {
  return (
    <>
      <MyView>
        <ReservationImageContainer>
          <ReservationImage source={require('../../assets/qr_payment.png')} />
        </ReservationImageContainer>
      </MyView>
    </>
  );
};

const ReservationImageContainer = styled.View`
  width: 80%;
  height: 80%;
  align-items: center;
  justify-content: center;
`;

const ReservationImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const BottomButtonView = styled.View`
  margin-bottom: 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export default NewReservationForm;
