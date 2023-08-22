import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Modal, TouchableWithoutFeedback} from 'react-native';
import PressButton from './PressButton';
import TextView from './TextView';
import themes from '../utils/themes';
import {Button} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import CheckBox from '@react-native-community/checkbox';
import CheckboxWithLabel from './CheckBox';

const ModalContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(128, 128, 128, 0.5);
`;

const ModalView = styled.View`
  background-color: white;
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  shadow-offset: 0px 2px;
  shadow-radius: 4px;
`;

interface ProfileMenuProps {
  onVisible: boolean;
  onCloseModal: () => void;
  onPressButton: (
    startDate: Date | undefined,
    endDate: Date | undefined,
  ) => void; // Datepicker'dan gelen tarihleri alacak şekilde güncellendi
}

const TransactionFilterMenu: React.FC<ProfileMenuProps> = ({
  onVisible,
  onCloseModal,
  onPressButton,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);

  return (
    <Modal animationType="slide" transparent={true} visible={onVisible}>
      <TouchableWithoutFeedback onPress={() => {}}>
        <ModalContainer>
          <ModalView>
            <CheckboxWithLabel
              label={'Kredi Kartı'}
              input={{
                value: false,
                onChange: function (value: boolean): void {
                  console.log(value);
                },
              }}
            />
            <CheckboxWithLabel
              label={'Banka Kartı'}
              input={{
                value: false,
                onChange: function (value: boolean): void {
                  console.log(value);
                },
              }}
            />
            <CheckboxWithLabel
              label={'Cüzdan Hesabı'}
              input={{
                value: false,
                onChange: function (value: boolean): void {
                  console.log(value);
                },
              }}
            />

            <PressButton
              onPress={() => {
                setOpenStart(true);
              }}
              textColor="white"
              text="Başlangıç Tarihi"
              mode="Button2"
              borderStatus={false}
            />
            <PressButton
              onPress={() => {
                setOpenEnd(true);
              }}
              textColor="white"
              text="Bitiş Tarihi"
              mode="Button2"
              borderStatus={false}
            />
            <DatePicker
              modal
              open={openStart}
              date={startDate}
              onConfirm={date => {
                setOpenStart(false);
                setStartDate(date);
              }}
              onCancel={() => {
                setOpenStart(false);
              }}
            />
            <DatePicker
              modal
              open={openEnd}
              date={endDate}
              onConfirm={date => {
                setOpenEnd(false);
                setEndDate(date);
              }}
              onCancel={() => {
                setOpenEnd(false);
              }}
            />
            <PressButton
              onPress={onCloseModal}
              textColor="white"
              text="Ara"
              mode="Button2"
              borderStatus={false}
            />
            <PressButton
              onPress={onCloseModal}
              textColor="white"
              text="Kapat"
              mode="Button4"
              borderStatus={false}
            />
          </ModalView>
        </ModalContainer>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default TransactionFilterMenu;
