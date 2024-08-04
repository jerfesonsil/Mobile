import React, { useState, useRef, useCallback, useEffect } from 'react';
import { View, StyleSheet, FlatList, RefreshControl, Animated } from 'react-native';
import Header, { HEADER_HEIGHT } from './components/Header'; 
import TopBar, {TAPBAR_HEIGHT} from './components/TopBar'; // Importar o novo componente
import Post from './components/Post';
import { db } from './firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

const MainScreen = ({ navigation }) => {
  const [postsData, setPostsData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;

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

  const scrollHandler = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [TAPBAR_HEIGHT, -HEADER_HEIGHT],
    extrapolate: 'clamp'
  });

  return (
    <View style={styles.container}>
      <TopBar/>
      <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}>
        <Header />
      </Animated.View>
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
        onScroll={scrollHandler}
        contentContainerStyle={[styles.flatListContent, { paddingTop: HEADER_HEIGHT }]} i
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT, // Usar a altura exportada
    width: '100%',
    position: 'absolute',
  
  },
  flatListContent: {
    // paddingTop será adicionado dinamicamente
  },
});

export default MainScreen;
