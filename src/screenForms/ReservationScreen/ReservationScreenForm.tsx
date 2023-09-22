import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MyView from '../../components/MyView';
import PressButton from '../../components/PressButton';
import {styled} from 'styled-components/native';
import themes from '../../utils/themes';
import ReservationListItem from '../../components/ReservationListItem';
import {ReservationDetail} from '../../types/type';
import {useTranslation} from 'react-i18next';
interface ReservationScreenFormProps {
  onSelected: (ReservationsDetail: ReservationDetail) => void;
  reservetionsData: ReservationDetail[];
  onPressNewReservation: () => void;
}

const ReservationScreenForm: React.FC<ReservationScreenFormProps> = ({
  onSelected,
  reservetionsData,
  onPressNewReservation,
}) => {
  const {t} = useTranslation();
  return (
    <>
      <MyView>
        <ReservationListItem
          rezervetionsData={reservetionsData}
          onSeleceted={onSelected}
        />
      </MyView>
      <View style={{width: '90%', alignItems: 'center', marginBottom: 20}}>
        <PressButton
          onPress={onPressNewReservation}
          textColor="white"
          text={t('AddReservation')}
          mode="Button2"
          borderStatus={false}
        />
      </View>
    </>
  );
};

export default ReservationScreenForm;
