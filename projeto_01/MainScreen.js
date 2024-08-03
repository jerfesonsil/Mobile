import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, FlatList, RefreshControl } from 'react-native';
import Header from './components/Header';
import Post from './components/Post';
import { db } from './firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

const MainScreen = ({ navigation }) => {
  const [postsData, setPostsData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

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

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  }, []);

  const renderItem = ({ item }) => <Post item={item} />;

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={postsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
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

