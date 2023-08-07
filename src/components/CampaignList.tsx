import React from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import {Card, Text} from 'react-native-paper';
import colors from '../utils/colors';
import TextView from './TextView';

interface Campaign {
  campName: string;
  campImg: string;
  campDetails: string;
}

interface CampaignListProps {
  campaigns: Campaign[];
}
const height = 200;
const getWidth = () => {
  const {width} = Dimensions.get('window');
  return width; // Ekranın yatay çözünürlüğünün %90'ini hesapla
};

const CampaignList: React.FC<CampaignListProps> = ({campaigns}) => {
  return (
    <View style={styles.cardContainer}>
      {campaigns.map((campaign, index) => (
        <Card key={index} style={styles.container}>
          <View style={styles.viewContainer}>
            <Card.Content style={styles.content}>
              <TextView
                textColor={'black'}
                textSize={getWidth() > 380 ? 10 : 22}
                text={`${campaign.campName}`}
                textStyle={'bold'}
                textMargin={{top: 0, bottom: 0}}
              />
              <Image
                source={require('../assets/campaign.png')}
                style={styles.image}
              />
              <TextView
                textColor={'black'}
                textSize={12}
                text={`${campaign.campDetails}`}
                textStyle={'500'}
                textMargin={{top: 5, bottom: 0}}
              />
            </Card.Content>
          </View>
        </Card>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height,
    borderWidth: 1,
    borderRadius: 5,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 10,
    borderColor: colors.buttonPrimary,
    marginHorizontal: 5,
  },
  content: {
    height: '100%',
  },
  cardContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  viewContainer: {
    height: height - 50,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  separator: {
    borderBottomWidth: 2,
    borderBottomColor: colors.buttonPrimary,
    width: '100%',
    alignSelf: 'center',
    marginVertical: 10,
  },
});

export default CampaignList;
