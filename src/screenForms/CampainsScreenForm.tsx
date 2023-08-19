import {View, Text, Image} from 'react-native';
import React from 'react';
import CampaignList from '../components/CampaignList';
import {campaigns} from '../values/values';
import MyView from '../components/MyView';
import {styled} from 'styled-components';
import TextView from '../components/TextView';

type Props = {};

const CampainsScreenForm = (props: Props) => {
  return (
    <>
      <View style={{marginTop: '2%', height: '20%'}}>
        <CampaignList campaigns={campaigns} />
      </View>
      <MyView>
        <Image
          style={{width: 100, height: 100, marginBottom: 10}}
          source={require('../assets/burger_king.png')}
        />
        <StyledTextView
          textColor={'black'}
          textSize={23}
          text={`%10 anında nakit kazan`}
          textStyle={'400'}
          textMargin={{top: 0, bottom: 0}}
        />
        <StyledTextView
          textColor={'black'}
          textSize={16}
          text={`BurgerKing’den yapacağın ilk Cüzdan alışverişinde toplan 100 TL’ye varan nakit kazan.
            Bu kampanya 2023 Ağustos sonuna kadar geçerli.`}
          textStyle={'300'}
          textMargin={{top: 0, bottom: 0}}
        />
      </MyView>
    </>
  );
};
const StyledTextView = styled(TextView)`
  font-size: ${({theme}) => theme.textSize}px;
`;
export default CampainsScreenForm;
