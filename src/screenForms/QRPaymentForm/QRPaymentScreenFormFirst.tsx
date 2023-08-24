import {Text} from 'react-native';
import React from 'react';
import MyView from '../../components/MyView';
import TextView from '../../components/TextView';
import {styled} from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import PressButton from '../../components/PressButton';

interface QRPaymentScreenFormFirstProps {
  goNext: () => void;
}

const QRPaymentScreenFormFirst: React.FC<QRPaymentScreenFormFirstProps> = ({
  goNext,
}) => {
  return (
    <>
      <MyView>
        <ReservationImageContainer>
          <ReservationImage source={require('../../assets/qr_payment.png')} />
        </ReservationImageContainer>
        <PressButton
          onPress={goNext}
          textColor="white"
          text="Devam"
          mode="Button2"
          borderStatus={false}
        />
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
export default QRPaymentScreenFormFirst;
