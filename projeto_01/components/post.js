import React from 'react';
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export default function Post({ item }) {
  return (
    <View style={styles.postContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.backgroundImage} />
      <View style={styles.textContainer}>
        <Text style={styles.postTitle}>{item.title}</Text>
        <Text style={styles.postContent}>{item.content}</Text>
      </View>
    </View>
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
    maxWidth: '70%', // Definindo a largura máxima como 50% da largura da imagem
    height: '100%',
    
    justifyContent: 'space-between', // Distribui espaço uniformemente entre os elementos
    alignItems: 'flex-start', // Alinha os itens ao início do eixo transversal
    paddingHorizontal: 2, // Adiciona preenchimento horizontal
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adiciona um fundo branco translúcido para os textos
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postContent: {
    fontSize: 14,
    marginTop: 0, 
  },
});


