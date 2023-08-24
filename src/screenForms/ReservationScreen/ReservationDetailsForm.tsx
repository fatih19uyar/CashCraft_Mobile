import React from 'react';
import MyView from '../../components/MyView';
import {styled} from 'styled-components/native';
import PressButton from '../../components/PressButton';
import {ReservationDetail} from '../../types/type';
import {Dimensions, SafeAreaView} from 'react-native';

interface RReservationDetailsFormProps {
  reservationDetail: ReservationDetail | undefined;
  onDelete: (id: number) => void;
}

const ReservationDetailsForm: React.FC<RReservationDetailsFormProps> = ({
  reservationDetail,
  onDelete,
}) => {
  const screenHeight = Dimensions.get('window').height;

  return (
    <>
      <MyView>
        <ReservationImageContainer>
          <ReservationImage
            source={require('../../assets/ReservationImage/ezgi_beytas_ayt_saw.png')}
          />
        </ReservationImageContainer>
      </MyView>
      <BottomButtonView>
        <PressButton
          onPress={() =>
            reservationDetail?.id ? onDelete(reservationDetail.id) : onDelete(0)
          }
          textColor="white"
          text="Rezervasyonu Kaldır"
          mode="Button4"
          borderStatus={false}
        />
      </BottomButtonView>
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

export default ReservationDetailsForm;
