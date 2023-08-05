import {StyleSheet, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import colors from '../utils/colors';

const Background = (props: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/background.png')}
        style={styles.backgroundImage}
      />
      {props.children}
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
