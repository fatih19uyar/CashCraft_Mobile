import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useAppSelector} from '../hooks/useStore';
import {shallowEqual} from 'react-redux';

const LoadingScreen: React.FC = () => {
  const {navigationState} = useAppSelector(
    state => ({
      navigationState: state.navigation,
    }),
    shallowEqual,
  );
  const [loading, setLoading] = useState(navigationState.loading);
  useEffect(() => {
    setLoading(navigationState.loading);
  }, [navigationState.loading]);

  if (!loading) return null;

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Image
          style={{height: 40, width: 40}}
          source={require('../assets/loading.gif')}
        />
        <Text style={styles.text}>Loading</Text>
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
