import React from 'react';
import {Card} from 'react-native-paper';
import styled from 'styled-components/native';
import colors from '../utils/colors';
import TextView from './TextView';

interface MoneyCardProps {
  amount: string;
  accountName: string;
}
const MoneyCard: React.FC<MoneyCardProps> = ({amount, accountName}) => {
  return (
    <StyledCard>
      <StyledTextView
        textColor={'black'}
        textSize={25}
        text={`${accountName} cüzdan hesabın`}
        textStyle={'300'}
        textMargin={{top: 0, bottom: 0}}
      />
      <StyledTextView
        textColor={'black'}
        textSize={40}
        text={`₺ ${amount}`}
        textStyle={'bold'}
        textMargin={{top: 0, bottom: 0}}
      />
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

const StyledTextView = styled(TextView)`
  margin: ${({theme}) => theme.textMargin.top}px 0
    ${({theme}) => theme.textMargin.bottom}px;
  font-size: ${({theme}) => theme.textSize}px;
`;

export default MoneyCard;
