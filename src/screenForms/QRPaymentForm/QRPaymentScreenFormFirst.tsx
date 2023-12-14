import React from 'react';
import MyView from '../../components/MyView';
import {styled} from 'styled-components/native';
import PressButton from '../../components/PressButton';
import {useTranslation} from 'react-i18next';
import {TransactionData} from '../../types/type';

interface QRPaymentScreenFormFirstProps {
  goNext: () => void;
  transaction: TransactionData;
}

const QRPaymentScreenFormFirst: React.FC<QRPaymentScreenFormFirstProps> = ({
  goNext,
  transaction,
}) => {
  const {t} = useTranslation();
  return (
    <>
      <MyView>
        <ReservationImageContainer>
          <ReservationImage
            source={{uri: `${transaction.qrCode}`}}
            style={{width: 400, height: 400}}
          />
        </ReservationImageContainer>
        <PressButton
          onPress={goNext}
          textColor="white"
          text={t('Next')}
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
