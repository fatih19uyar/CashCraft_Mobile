import {Image} from 'react-native';
import React from 'react';
import TextView from '../../components/TextView';
import PressButton from '../../components/PressButton';
import {styled} from 'styled-components/native';
import {useTranslation} from 'react-i18next';

type Props = {
  goNext: () => void;
  goBack: () => void;
};

const DeleteWalletScreenFormFirst = (props: Props) => {
  const {t} = useTranslation();
  return (
    <>
      <Image
        source={require('../../assets/alert.png')}
        style={{width: 100, height: 100}}
      />
      <TextContainer>
        <TextView
          textColor={'black'}
          textSize={18}
          text={t('DeleteWalletScreenFormFirstHeaderText')}
          textStyle={'500'}
          textMargin={{top: 10, bottom: 0}}
        />
        <TextView
          textColor={'black'}
          textSize={14}
          text={t('DeleteWalletScreenFormFirstText')}
          textStyle={'300'}
          textMargin={{top: 10, bottom: 0}}
        />
      </TextContainer>
      <ButtonContainer>
        <PressButton
          onPress={props.goBack}
          textColor="white"
          text={t('GiveUp')}
          mode="Button2"
          borderStatus={false}
        />
        <PressButton
          onPress={props.goNext}
          textColor="white"
          text={t('DeleteAccount')}
          mode="Button4"
          borderStatus={false}
        />
      </ButtonContainer>
    </>
  );
};

const TextContainer = styled.View`
  width: 80%;
  align-items: left;
  justify-content: center;
  margin-left: 5%;
`;
const ButtonContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 5%;
  margin-top: 10%;
`;

export default DeleteWalletScreenFormFirst;
