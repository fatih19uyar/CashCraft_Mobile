import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import colors from '../utils/colors';

interface TopBarProps {
  onProfileLogoPress: () => void;
}

const getWidth = () => {
  const {width} = Dimensions.get('window');
  return width;
};

const TopBar: React.FC<TopBarProps> = ({onProfileLogoPress}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/idvlabs-logo.png')}
            style={styles.logo}
          />
        </View>
        <TouchableOpacity
          style={styles.profileLogoContainer}
          onPress={onProfileLogoPress}>
          <Image
            source={require('../assets/profile_logo.png')}
            style={styles.profileLogo}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: getWidth(),
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    marginLeft: getWidth() / 6,
    marginBottom: 5,
  },
  logo: {
    width: 200,
    resizeMode: 'contain',
  },
  profileLogoContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10,
  },
  profileLogo: {
    width: 40,
    height: 40,
  },
  separator: {
    borderBottomWidth: 2,
    borderBottomColor: colors.buttonPrimary,
    width: '100%',
    alignSelf: 'center',
    marginVertical: 10,
  },
});

export default TopBar;
