// Carousel.js
import React, { useRef, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const Carousel = ({ imageUrls, selectedImage, setSelectedImage }) => {
  const scrollViewRef = useRef(null);

  useEffect(() => {
    if (scrollViewRef.current && imageUrls.length > 0) {
      const index = imageUrls.indexOf(selectedImage);
      if (index !== -1) {
        const offsetX = index * (viewportWidth * 0.8 + 20); // 20 é a margem horizontal
        scrollViewRef.current.scrollTo({ x: offsetX, animated: true });
      }
    }
  }, [selectedImage]);

  const renderImageItem = (item, index) => (
    <TouchableOpacity key={index} onPress={() => setSelectedImage(item)} style={styles.imageContainer}>
      <Image source={{ uri: item }} style={[styles.image, selectedImage === item && styles.selectedImage]} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.carousel}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {imageUrls.map(renderImageItem)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    marginBottom: 20,
  },
  imageContainer: {
    marginHorizontal: 10,
  },
  image: {
    width: viewportWidth * 0.8,
    height: 200,
    borderRadius: 10,
  },
  selectedImage: {
    borderWidth: 3,
    borderColor: '#007bff',
  },
});

export default Carousel;
