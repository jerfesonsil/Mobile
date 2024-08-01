import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.imageContainer}>
        <Image style={styles.juntai} source={require('../assets/JuntAí.png')} />
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

  