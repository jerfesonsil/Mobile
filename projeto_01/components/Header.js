import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.imageContainer}>
        <Image style={styles.juntai} source={require('../assets/JuntAí.png')} />
      </View>
      <View style={styles.iconsContainer}>
        <FontAwesome5 name="search" size={24} color="black" style={styles.icon} />
        <FontAwesome5 name="user" size={24} color="black" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: windowHeight * 0.08,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  imageContainer: {},
  juntai: {
    height: windowHeight * 0.05,
    width: windowWidth * 0.3,
    resizeMode: 'contain',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
  },
});

export default Header;

  