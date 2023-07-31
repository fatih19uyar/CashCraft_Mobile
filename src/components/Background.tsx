import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../utils/colors';

const Background = (props: any) => {
  return <View style={styles.container}>{props.children}</View>;
};

export default Background;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
