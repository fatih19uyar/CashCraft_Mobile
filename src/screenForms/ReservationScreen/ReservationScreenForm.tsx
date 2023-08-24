import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MyView from '../../components/MyView';
import PressButton from '../../components/PressButton';
import {styled} from 'styled-components/native';
import themes from '../../utils/themes';
import ReservationListItem from '../../components/ReservationListItem';
import {ReservationDetail} from '../../types/type';
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
          text="Rezervasyon ekle"
          mode="Button2"
          borderStatus={false}
        />
      </View>
    </>
  );
};
const ListItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid ${themes.light.colors.buttonBorderColor};
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  background-color: ${themes.light.colors.background};
`;

const Thumbnail = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const TextContainer = styled.View`
  flex: 1;
`;

const TitleText = styled.Text`
  font-weight: bold;
  margin-bottom: 5px;
`;

const SubtitleText = styled.Text`
  color: gray;
`;

export default ReservationScreenForm;
