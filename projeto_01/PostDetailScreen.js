import React from 'react';
import Header from './components/Header';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

const PostDetailScreen = ({ route }) => {
  // Extrair os detalhes do post dos parâmetros de navegação
  const { postDetails } = route.params;

  return (
    <View style={styles.container}>
      <Header />
      {/* Primeira parte (30% da tela) */}
      <View style={styles.upperContainer}>
        {/* Usar ImageBackground para exibir a imagem como plano de fundo */}
        <ImageBackground source={{ uri: postDetails.imageUrl }} style={styles.imageBackground}>
          {/* Exibir o título e outros detalhes do post */}
          <Text style={styles.title}>{postDetails.title}</Text>
          <Text style={styles.date}>Data: {postDetails.date}</Text>
          <Text style={styles.location}>Local: {postDetails.location}</Text>
          <Text style={styles.tags}>Tags: {postDetails.tags.join(', ')}</Text>
        </ImageBackground>
      </View>
      {/* Segunda parte (70% da tela) */}
      <View style={styles.lowerContainer}>
        {/* <Text style={styles.content}>{postDetails.content}</Text> */}
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    flex: 3, // 30% da tela
  },
  lowerContainer: {
    flex: 7, // 70% da tela
    backgroundColor: '#ffffff', // Cor de fundo da parte inferior
    padding: 20, // Espaçamento interno
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff', // Cor do texto: branco
  },
  date: {
    fontSize: 16,
    color: '#fff', // Cor do texto: branco
  },
  location: {
    fontSize: 16,
    color: '#fff', // Cor do texto: branco
  },
  tags: {
    fontSize: 16,
    color: '#fff', // Cor do texto: branco
  },
  content: {
    fontSize: 16,
    color: '#000', // Cor do texto: preto
  },
});

export default PostDetailScreen;








