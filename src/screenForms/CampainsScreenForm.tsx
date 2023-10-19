import React from 'react';
import {View, Image} from 'react-native';
import CampaignList from '../components/CampaignList';
import MyView from '../components/MyView';
import TextView from '../components/TextView';
import {CampaignState} from '../types/type';
import themes from '../utils/themes';

interface CampainsScreenFormProps {
  onPressCampaing: (index: number) => void;
  selectedCampaign: CampaignState['selecetedCampaign'];
  campaigns: CampaignState['campaigns'];
}

const CampainsScreenForm: React.FC<CampainsScreenFormProps> = ({
  onPressCampaing,
  selectedCampaign,
  campaigns,
}) => {
  Boolean(selectedCampaign) ? null : (selectedCampaign = campaigns[0]);
  return (
    <>
      <View style={{marginTop: '2%', height: '20%'}}>
        <CampaignList campaings={campaigns} handleCardPress={onPressCampaing} />
      </View>
      <MyView>
        <Image
          style={{width: 100, height: 100, marginBottom: 10}}
          source={{
            uri: `data:image/jpeg;base64,${selectedCampaign?.campImg}`,
          }}
        />

        <TextView
          style={{
            color: themes.light.colors.text,
            fontSize: themes.light.fontSize.large + 3,
            fontWeight: '400',
          }}>
          {selectedCampaign?.campTitle}
        </TextView>
        <TextView
          style={{
            color: themes.light.colors.text,
            fontSize: themes.light.fontSize.medium,
            fontWeight: '300',
          }}>
          {selectedCampaign?.campDetails}
        </TextView>
      </MyView>
    </>
  );
};

export default CampainsScreenForm;
