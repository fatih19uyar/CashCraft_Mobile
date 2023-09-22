import React from 'react';
import MyView from '../../components/MyView';
import {styled} from 'styled-components/native';
import PressButton from '../../components/PressButton';
import {ReservationDetail} from '../../types/type';
import {useTranslation} from 'react-i18next';

interface AddedNewReservationFormProps {
  reservationDetail: ReservationDetail | undefined;
  onAdd: (id: number) => void;
}

const AddedNewReservationForm: React.FC<AddedNewReservationFormProps> = ({
  reservationDetail,
  onAdd,
}) => {
  const {t} = useTranslation();
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
            reservationDetail?.id ? onAdd(reservationDetail.id) : onAdd(0)
          }
          textColor="white"
          text={t('AddTransaction')}
          mode="Button2"
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

export default AddedNewReservationForm;
