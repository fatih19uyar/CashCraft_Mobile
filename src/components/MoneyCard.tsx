import React from 'react';
import {Card} from 'react-native-paper';
import styled from 'styled-components/native';
import colors from '../utils/colors';
import TextView from './TextView';
import {useTranslation} from 'react-i18next';
import themes from '../utils/themes';

interface MoneyCardProps {
  amount: string;
  accountName: string;
}
const MoneyCard: React.FC<MoneyCardProps> = ({amount, accountName}) => {
  const [t] = useTranslation();
  return (
    <StyledCard>
      <TextView
        style={{
          color: themes.light.colors.text,
          fontSize: themes.light.fontSize.large,
          fontWeight: '300',
        }}>
        {`${accountName} ${t('WalletAccount')}`}
      </TextView>

      <TextView
        style={{
          color: themes.light.colors.text,
          fontSize: 40,
          fontWeight: 'bold',
        }}>{`₺ ${amount}`}</TextView>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  width: 90%;
  height: 150px;
  align-self: center;
  border-width: ${({theme}) => theme.border.small}px;
  border-radius: 5px;
  border-bottom-width: ${({theme}) => theme.border.extraLarge}px;
  border-color: ${colors.buttonPrimary};
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

export default MoneyCard;
