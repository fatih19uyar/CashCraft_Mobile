import React, {createContext, useContext, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, StyleSheet, Image} from 'react-native';

export const LoadingContext = createContext({
  loading: false,
  setLoading: (value: boolean) => {},
});
export const LoadingProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);
  const value = {loading, setLoading};
  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};
export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider');
  }
  return context;
}

const LoadingScreen: React.FC = () => {
  const {loading} = useContext(LoadingContext);
  const {t} = useTranslation();
  console.log('loading', loading);
  if (!loading) return null;

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Image
          style={{height: 40, width: 40}}
          source={require('../assets/loading.gif')}
        />
        <Text style={styles.text}>{t('Loading')}</Text>
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
