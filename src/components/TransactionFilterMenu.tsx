import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Modal, TouchableWithoutFeedback} from 'react-native';
import PressButton from './PressButton';
import DatePicker from 'react-native-date-picker';
import CheckboxWithLabel from './CheckBox';
import {useTranslation} from 'react-i18next';

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
}) => {
  const {t} = useTranslation();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);
  const [history, setHistory] = useState(false);

  return (
    <Modal animationType="slide" transparent={true} visible={onVisible}>
      <TouchableWithoutFeedback onPress={() => {}}>
        <ModalContainer>
          <ModalView>
            {history ? (
              <>
                <CheckboxWithLabel
                  label={t('CreditCard')}
                  input={{
                    value: false,
                    onChange: function (value: boolean): void {
                      console.log(value);
                    },
                  }}
                />
                <CheckboxWithLabel
                  label={t('BankCard')}
                  input={{
                    value: false,
                    onChange: function (value: boolean): void {
                      console.log(value);
                    },
                  }}
                />
                <CheckboxWithLabel
                  label={t('WalletCard')}
                  input={{
                    value: false,
                    onChange: function (value: boolean): void {
                      console.log(value);
                    },
                  }}
                />
                <PressButton
                  onPress={() => {
                    setHistory(false);
                  }}
                  textColor="white"
                  text={t('Back')}
                  mode="Button2"
                  borderStatus={false}
                />
              </>
            ) : (
              <>
                <PressButton
                  onPress={() => {
                    setHistory(true);
                  }}
                  textColor="white"
                  text={t('TransactionType')}
                  mode="Button2"
                  borderStatus={false}
                />
                <PressButton
                  onPress={() => {
                    setOpenStart(true);
                  }}
                  textColor="white"
                  text={t('StartDate')}
                  mode="Button2"
                  borderStatus={false}
                />
                <PressButton
                  onPress={() => {
                    setOpenEnd(true);
                  }}
                  textColor="white"
                  text={t('EndDate')}
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
                  mode="date"
                  onCancel={() => {
                    setOpenStart(false);
                  }}
                />
                <DatePicker
                  modal
                  open={openEnd}
                  mode="date"
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
                  text={t('Search')}
                  mode="Button2"
                  borderStatus={false}
                />
                <PressButton
                  onPress={onCloseModal}
                  textColor="white"
                  text={t('Close')}
                  mode="Button4"
                  borderStatus={false}
                />
              </>
            )}
          </ModalView>
        </ModalContainer>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default TransactionFilterMenu;
