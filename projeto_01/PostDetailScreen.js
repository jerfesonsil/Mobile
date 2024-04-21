import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const PostDetailScreen = ({ route }) => {
  // Extrair os detalhes do post dos parâmetros de navegação
  const { postDetails } = route.params;

  return (
    <View style={styles.container}>
      {/* Primeira parte (30% da tela) */}
      <View style={styles.upperContainer}>
        {/* Usar ImageBackground para exibir a imagem como plano de fundo */}
        <ImageBackground source={{ uri: postDetails.imageUrl }} style={styles.imageBackground}>
          {/* Exibir o título e o conteúdo do post */}
          <Text style={styles.postTitle}>{postDetails.title}</Text>
          <Text style={styles.postContent}>{postDetails.content}</Text>
        </ImageBackground>
      </View>
      {/* Segunda parte (70% da tela) */}
      <View style={styles.lowerContainer}>
        <Text>Detalhes do Post</Text>
        <Text>ID: {postDetails.id}</Text>
        {/* Exibir outras informações do post conforme necessário */}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // Adiciona um espaçamento interno para os textos
  },
  postTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff', // Cor do texto: preto
  },
  postContent: {
    fontSize: 16,
    color: '#fff', // Cor do texto: preto
  },
});

export default PostDetailScreen;





