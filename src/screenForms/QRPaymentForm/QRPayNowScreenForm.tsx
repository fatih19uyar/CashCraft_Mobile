import React from 'react';
import MyView from '../../components/MyView';
import TextView from '../../components/TextView';
import themes from '../../utils/themes';
import {styled} from 'styled-components/native';
import PasswordInput from '../../components/PasswordInput';
import PressButton from '../../components/PressButton';
import {PaymentDetails} from '../../types/type';
import {useTranslation} from 'react-i18next';

interface QRPayNowScreenFormProps {
  getPassword: (password: any) => void;
  goNext: () => void;
  readPayment: PaymentDetails;
}
const QRPayNowScreenForm: React.FC<QRPayNowScreenFormProps> = ({
  getPassword,
  readPayment,
  goNext,
}) => {
  const {t} = useTranslation();
  const paymentDetails = () => {
    return (
      <ListItemContainer>
        <Thumbnail source={require('../../assets/payment_details_right.png')} />
        <TextContainer>
          <TitleText>{t('CompanyName')}</TitleText>
          <SubtitleText>{readPayment.companyName}</SubtitleText>
        </TextContainer>
        <TextContainer>
          <TitleText>{t('Amount')}</TitleText>
          <SubtitleText>{readPayment.price} TL</SubtitleText>
        </TextContainer>
      </ListItemContainer>
    );
  };
  return (
    <>
      <MyView>
        <TextView
          textColor={themes.light.colors.buttonPrimary}
          textSize={30}
          text={t('EnterWalletPassword')}
          textStyle={'500'}
          textMargin={{top: 25, bottom: 0}}
        />
        <TextView
          textColor={themes.light.colors.text}
          textSize={20}
          text={'Kalan Süre: 00:00'}
          textStyle={'300'}
          textMargin={{top: 0, bottom: 25}}
        />
        <TextView
          textColor={themes.light.colors.text}
          textSize={23}
          text={t('welcome') + ' Ezgi Beytaş'}
          textStyle={'500'}
          textMargin={{top: 0, bottom: 25}}
        />
        <StyledImage source={require('../../assets/profile_element.png')} />
        <PasswordInput length={6} onChangePassword={getPassword} />
        <PressButton
          onPress={goNext}
          textColor="white"
          text={t('Next')}
          mode="Button2"
          borderStatus={false}
        />
        {paymentDetails()}
      </MyView>
    </>
  );
};

const StyledImage = styled.Image`
  width: 90px;
  height: 90px;
`;

const ListItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid ${themes.light.colors.buttonBorderColor};
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  background-color: ${themes.light.colors.background};
  margin-top: 20px;
`;

const Thumbnail = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 20px;
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

export default QRPayNowScreenForm;
