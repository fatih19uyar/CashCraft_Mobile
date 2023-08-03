import React from 'react';
import {TouchableOpacity, Image, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type BackButtonProps = {
  goBack: any;
};

export default function BackButton({goBack}: BackButtonProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <TouchableOpacity onPress={goBack}>
        <Image
          style={styles.image}
          source={require('../assets/back_icon.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 15,
    zIndex: 1,
  },
  image: {
    marginTop: 40,
    marginLeft: 10,
    width: 30,
    height: 30,
  },
});
