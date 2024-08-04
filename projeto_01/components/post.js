import React from 'react';
import { StyleSheet, View, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;

export default function Post({ item }) {
  const navigation = useNavigation();

  const handlePress = () => {
   // console.log('Detalhes do post:', item);
    navigation.navigate('PostDetailScreen', { postDetails: item });
  };

  return (
    <TouchableOpacity style={styles.postContainer} onPress={handlePress}>
      <Image source={{ uri: item.imageUrl }} style={styles.backgroundImage} />
      <View style={styles.textContainer}>
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postLabel}>Date:</Text>
        <Text style={styles.postDetails}>{item.date}</Text>
        <Text style={styles.postLabel}>Location:</Text>
        <Text style={styles.postDetails}>{item.location}</Text>
        <Text style={styles.postLabel}>Tags:</Text>
        <Text style={styles.postDetails}>{item.tags.join(', ')}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    height: windowHeight * 0.3,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  textContainer: {
    flex: 1,
    maxWidth: '70%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 2,
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  postTitle: {
    fontSize: 25, 
    fontWeight: 'bold', // Negrito
    marginBottom: 5,
  },
  postLabel: {
    fontSize: 20, 
    fontWeight: 'bold', // Negrito
  },
  postDetails: {
    fontSize: 15,
    marginTop: 0,
  },
});

