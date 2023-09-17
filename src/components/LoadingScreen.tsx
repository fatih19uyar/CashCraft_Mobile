import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Image} from 'react-native';

interface LoadingScreenProps {
  visible: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({visible}) => {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Image
          style={{height: 40, width: 40}}
          source={require('../assets/loading.gif')}
        />
        <Text style={styles.text}>Yükleniyor...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  overlay: {
    backgroundColor: '#333333',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    marginTop: 10,
  },
});

export default LoadingScreen;
