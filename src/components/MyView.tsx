import {StyleSheet, View} from 'react-native';
import React from 'react';

const MyView = (props: any) => {
  return <View style={styles.container}>{props.children}</View>;
};

export default MyView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
