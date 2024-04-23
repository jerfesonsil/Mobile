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
    alignItems: 'flex-end',
    height: windowHeight * 0.1, // Ajusta a altura do cabeçalho
    paddingHorizontal: 10,
  },
  juntai: {
    height: windowHeight * 0.07,
    width: windowWidth * 0.3,
    resizeMode: 'contain',
  },
  iconsContainer: {
    height: windowHeight * 0.045,
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
  },
});

export default Header;

  