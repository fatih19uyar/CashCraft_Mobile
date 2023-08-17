import {Image} from 'react-native';
import React from 'react';
import TextView from '../../components/TextView';
import PressButton from '../../components/PressButton';
import {styled} from 'styled-components/native';

type Props = {
  goNext: () => void;
  goBack: () => void;
};

const DeleteWalletScreenForm = (props: Props) => {
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
          text={'idvlabs Cüzdan hesabını kapatmak mı istiyorsun?'}
          textStyle={'500'}
          textMargin={{top: 10, bottom: 0}}
        />
        <TextView
          textColor={'black'}
          textSize={14}
          text={
            'Hesabını kapatırsan idvlabs Cüzdan imkanlarından' +
            ' ve kampanyalarından yararlanamayacaksın.' +
            ' Kaydettiğin tüm kart bilgileri silinecek.'
          }
          textStyle={'300'}
          textMargin={{top: 10, bottom: 0}}
        />
      </TextContainer>
      <ButtonContainer>
        <PressButton
          onPress={props.goBack}
          textColor="white"
          text="Vazgeç"
          mode="Button2"
          borderStatus={false}
        />
        <PressButton
          onPress={props.goNext}
          textColor="white"
          text="Hesabımı Sil"
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

export default DeleteWalletScreenForm;
