import {StyleSheet, View, ImageBackground, Image} from 'react-native';
import React from 'react';

const Background = (props: any) => {
  return (
    <View style={styles.container}>
      {props.imageSet === 1 ? (
        <Image
          source={require('../assets/background_1.png')}
          style={styles.backgroundImage}
        />
      ) : (
        <Image
          source={require('../assets/background_2.png')}
          style={styles.backgroundImage}
        />
      )}

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
