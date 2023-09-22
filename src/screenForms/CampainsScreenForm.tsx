import React from 'react';
import {View, Image} from 'react-native';
import CampaignList from '../components/CampaignList';
import MyView from '../components/MyView';
import {styled} from 'styled-components/native';
import TextView from '../components/TextView';
import {Campaign} from '../types/type';

interface CampainsScreenFormProps {
  onPressCampaing: (index: number) => void;
  CampingList: Campaign[];
  selectedCampaing: Campaign;
}

const CampainsScreenForm: React.FC<CampainsScreenFormProps> = ({
  onPressCampaing,
  CampingList,
  selectedCampaing,
}) => {
  return (
    <>
      <View style={{marginTop: '2%', height: '20%'}}>
        <CampaignList
          campaigns={CampingList}
          handleCardPress={onPressCampaing}
        />
      </View>
      <MyView>
        <Image
          style={{width: 100, height: 100, marginBottom: 10}}
          source={selectedCampaing.campImg}
        />
        <StyledTextView
          textColor={'black'}
          textSize={23}
          text={selectedCampaing?.campTitle}
          textStyle={'400'}
          textMargin={{top: 0, bottom: 0}}
        />
        <StyledTextView
          textColor={'black'}
          textSize={16}
          text={selectedCampaing.campDetails}
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
