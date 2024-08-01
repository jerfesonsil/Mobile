import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import PostsContainer from './components/PostsContainer';
import Post from './components/Post';
import { db } from './firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

const MainScreen = ({ navigation }) => {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPostsData(data);
      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => <Post item={item} />;

  return (
    <View style={styles.container}>
      <Header />
      <PostsContainer
        data={postsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;
