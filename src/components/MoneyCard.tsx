import React from 'react';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import colors from '../utils/colors';
import TextView from './TextView';

interface MoneyCardProps {
  amount: string;
  accountName: string;
  accountNumber: number;
}

const getWidth = () => {
  const { width } = Dimensions.get('window');
  return width * 0.9; // Ekranın yatay çözünürlüğünün %90'ini hesapla
};

const MoneyCard: React.FC<MoneyCardProps> = ({
  amount,
  accountName,
  accountNumber,
}) => {
  return (
    <StyledCard>
      <CardContent>
        <StyledTextView
          textColor={'black'}
          textSize={25}
          text={`${accountName} cüzdan hesabın`}
          textStyle={'300'}
          textMargin={{ top: 0, bottom: 0 }}
        />
        <StyledTextView
          textColor={'black'}
          textSize={40}
          text={`₺ ${amount}`}
          textStyle={'bold'}
          textMargin={{ top: 5, bottom: 5 }}
        />
        <StyledTextView
          textColor={'black'}
          textSize={18}
          text={`cüzdan numarası ${accountNumber}`}
          textStyle={'300'}
          textMargin={{ top: 0, bottom: 0 }}
        />
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  width: ${getWidth()}px;
  height: 150px;
  align-self: center;
  border-width: 1px;
  border-radius: 5px;
  border-top-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 10px;
  border-color: ${colors.buttonPrimary};
`;

const CardContent = styled(Card.Content)`
  justify-content: center;
`;

const StyledTextView = styled(TextView)`
  margin: ${({ theme }) => theme.textMargin.top}px 0
    ${({ theme }) => theme.textMargin.bottom}px;
  font-size: ${({ theme }) => theme.textSize}px;
`;

export default MoneyCard;
