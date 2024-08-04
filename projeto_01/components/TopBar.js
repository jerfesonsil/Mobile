// TopBar.js
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
export const TAPBAR_HEIGHT=windowHeight * 0.033;

const TopBar = () => {
  return (
    <View style={styles.container} />
  );
};

const styles = StyleSheet.create({
  container: {
    height: TAPBAR_HEIGHT, 
  },
});

export default TopBar;
