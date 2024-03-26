import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import Header from './components/Header';
import Post from './components/post';
import LoginScreen from './LoginScreen';

const postsData = [
  { id: '1', title: 'Post 1', content: 'Conteúdo do post 1', imageUrl: 'https://welcometozante.com/wp-content/uploads/2021/01/party-zakynthos-welcometozante.jpg' },
  { id: '2', title: 'Post 2', content: 'Conteúdo do post 2', imageUrl: 'https://cdn.ome.lt/aymPkEO0fYzmsD2TRjQ9XebO-6k=/970x360/smart/uploads/conteudo/fotos/44138122945_56e3294da5_o.jpg' },
  { id: '3', title: 'Post 3', content: 'Conteúdo do post 3', imageUrl: 'https://marulho.com.br/wp-content/uploads/2020/02/marulho-ronco-edit.jpg' },
  { id: '4', title: 'Post 4', content: 'Conteúdo do post 4', imageUrl: 'https://i.ytimg.com/vi/Jrhz1Xno_gY/maxresdefault.jpg' },
  { id: '5', title: 'Post 5', content: 'Conteúdo do post 5', imageUrl: 'https://i0.wp.com/assets.b9.com.br/wp-content/uploads/2021/03/shows-ao-vivo.jpg?fit=1280%2C720&ssl=1' },
  { id: '6', title: 'Post 6', content: 'Conteúdo do post 6', imageUrl: 'https://marulho.com.br/wp-content/uploads/2020/02/marulho-ronco-edit.jpg' },
  { id: '7', title: 'Post 7', content: 'Conteúdo do post 7', imageUrl: 'https://welcometozante.com/wp-content/uploads/2021/01/party-zakynthos-welcometozante.jpg' },
  { id: '8', title: 'Post 8', content: 'Conteúdo do post 8', imageUrl: 'https://cdn.ome.lt/aymPkEO0fYzmsD2TRjQ9XebO-6k=/970x360/smart/uploads/conteudo/fotos/44138122945_56e3294da5_o.jpg' },
  { id: '9', title: 'Post 9', content: 'Conteúdo do post 9', imageUrl: 'https://i.ytimg.com/vi/Jrhz1Xno_gY/maxresdefault.jpg' },
  { id: '10', title: 'Post 10', content: 'Conteúdo do post 10', imageUrl: 'https://i0.wp.com/assets.b9.com.br/wp-content/uploads/2021/03/shows-ao-vivo.jpg?fit=1280%2C720&ssl=1' },
];

const MainScreen = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username.trim() !== '' && password.trim() !== '') {
      setLoggedIn(true);
    }
  };

  const renderItem = ({ item }) => <Post item={item} />;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {!loggedIn && <LoginScreen onLogin={handleLogin} />}
      {loggedIn && (
        <>
          <Header/>
          <View style={styles.postsContainer}>
            <FlatList
              data={postsData}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  postsContainer: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});

export default MainScreen;






