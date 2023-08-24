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
        <ReservationImage
          resizeMode="contain" // Önemli: Görüntüyü ölçeklemek ve sığdırmak için resizeMode kullanıyoruz
          source={require('../../assets/ReservationImage/ezgi_beytas_ayt_saw.png')}
          style={{height: screenHeight * 0.9}} // Ekranın yüzde 90'ına uygun yükseklik ayarlanıyor
        />
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
const ReservationImage = styled.Image`
  width: 100%;
`;
const BottomButtonView = styled.View`
  margin-bottom: 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export default ReservationDetailsForm;
