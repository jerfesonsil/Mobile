import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const postsData = [
  { id: '1', title: 'Post 1', content: 'Conteúdo do post 1', imageUrl: 'https://welcometozante.com/wp-content/uploads/2021/01/party-zakynthos-welcometozante.jpg' },
  { id: '2', title: 'Post 2', content: 'Conteúdo do post 2', imageUrl: 'https://cdn.ome.lt/aymPkEO0fYzmsD2TRjQ9XebO-6k=/970x360/smart/uploads/conteudo/fotos/44138122945_56e3294da5_o.jpg' },
  { id: '3', title: 'Post 3', content: 'Conteúdo do post 3', imageUrl: 'https://marulho.com.br/wp-content/uploads/2020/02/marulho-ronco-edit.jpg' },
  { id: '4', title: 'Post 4', content: 'Conteúdo do post 4', imageUrl: 'https://welcometozante.com/wp-content/uploads/2021/01/party-zakynthos-welcometozante.jpg' },
  { id: '5', title: 'Post 5', content: 'Conteúdo do post 5', imageUrl: 'https://cdn.ome.lt/aymPkEO0fYzmsD2TRjQ9XebO-6k=/970x360/smart/uploads/conteudo/fotos/44138122945_56e3294da5_o.jpg' },
  { id: '6', title: 'Post 6', content: 'Conteúdo do post 6', imageUrl: 'https://marulho.com.br/wp-content/uploads/2020/02/marulho-ronco-edit.jpg' },
  { id: '7', title: 'Post 7', content: 'Conteúdo do post 7', imageUrl: 'https://welcometozante.com/wp-content/uploads/2021/01/party-zakynthos-welcometozante.jpg' },
  { id: '8', title: 'Post 8', content: 'Conteúdo do post 8', imageUrl: 'https://cdn.ome.lt/aymPkEO0fYzmsD2TRjQ9XebO-6k=/970x360/smart/uploads/conteudo/fotos/44138122945_56e3294da5_o.jpg' },
  { id: '9', title: 'Post 9', content: 'Conteúdo do post 9', imageUrl: 'https://marulho.com.br/wp-content/uploads/2020/02/marulho-ronco-edit.jpg' },
  { id: '10', title: 'Post 10', content: 'Conteúdo do post 10', imageUrl: 'https://welcometozante.com/wp-content/uploads/2021/01/party-zakynthos-welcometozante.jpg' },
];

export default function App() {
  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.backgroundImage} />
      <View style={styles.textContainer}>
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postContent}>{item.content}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image style={styles.juntai} source={require('./assets/JuntAí.png')} />
        </View>
        <View style={styles.iconsContainer}>
          <FontAwesome5 name="search" size={24} color="black" style={styles.icon} />
          <FontAwesome5 name="user" size={24} color="black" style={styles.icon} />
        </View>
      </View>
      <View style={styles.postsContainer}>
        <FlatList
          data={postsData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: windowHeight * 0.1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  imageContainer: {},
  juntai: {
    height: windowHeight * 0.05,
    width: windowWidth * 0.4,
    resizeMode: 'contain',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
  },
  postsContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  postContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
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
    padding: 20,
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Adiciona um fundo branco translúcido para os textos
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postContent: {
    fontSize: 16,
  },
});





