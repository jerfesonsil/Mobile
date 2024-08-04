// CreatePostScreen.js
import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Button, ScrollView, Alert, Dimensions, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header, { HEADER_HEIGHT } from './components/Header'; 
import FormElements from './components/FormElements';
import Carousel from './components/Carousel'; 
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig'; 
import TopBar, { TAPBAR_HEIGHT } from './components/TopBar';

const CreatePostScreen = () => {
  const navigation = useNavigation();
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postDate, setPostDate] = useState('');
  const [postLocation, setPostLocation] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [showTags, setShowTags] = useState(false);
  const [availableTags, setAvailableTags] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedImage, setSelectedImage] = useState('');
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Buscar tags do Firestore
        const tagsSnapshot = await getDocs(collection(db, 'tags'));
        const tagsData = tagsSnapshot.docs.map(doc => doc.data().tags).flat();
        setAvailableTags(tagsData);

        // Buscar URLs de imagens do Firestore
        const imagesSnapshot = await getDocs(collection(db, 'images'));
        const imagesData = imagesSnapshot.docs.map(doc => doc.data().urls).flat();
        setImageUrls(imagesData);
      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
      }
    };

    fetchData();
  }, []);

  const handlePostTitleChange = (text) => {
    setPostTitle(text);
  };

  const handlePostContentChange = (text) => {
    setPostContent(text);
  };

  const handlePostDateChange = (text) => {
    const formattedDate = text.replace(/[^0-9]/g, '').replace(/(.{2})(.{2})(.{4})/, '$1/$2/$3');
    setPostDate(formattedDate);
  };

  const handlePostLocationChange = (text) => {
    setPostLocation(text);
  };

  const handleTagSelection = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(item => item !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handlePostCreation = async () => {
    try {
      const newPostRef = await addDoc(collection(db, 'events'), {
        title: postTitle,
        content: postContent,
        date: postDate,
        location: postLocation,
        tags: selectedTags,
        imageUrl: selectedImage || imageUrls[Math.floor(Math.random() * imageUrls.length)],
      });

      Alert.alert('Sucesso', 'Post adicionado com sucesso!');

      setPostTitle('');
      setPostContent('');
      setPostDate('');
      setPostLocation('');
      setSelectedTags([]);
      setSelectedImage('');

      console.log('Novo post criado com ID:', newPostRef.id);

      navigation.navigate('MainScreen');
    } catch (error) {
      Alert.alert('Erro', `Erro ao adicionar post: ${error.message}`);
    }
  };

  const isPostReady =
    postTitle.trim() !== '' &&
    postContent.trim() !== '' &&
    postDate.trim() !== '' &&
    postLocation.trim() !== '';

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [TAPBAR_HEIGHT, -HEADER_HEIGHT-10],
    extrapolate: 'clamp'
  });

  return (
    <View style={styles.container}>
      <TopBar />
      <Animated.View style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}>
        <Header />
      </Animated.View>
      <Animated.ScrollView 
        contentContainerStyle={styles.scrollContainer}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <FormElements
          postTitle={postTitle}
          handlePostTitleChange={handlePostTitleChange}
          postContent={postContent}
          handlePostContentChange={handlePostContentChange}
          postDate={postDate}
          handlePostDateChange={handlePostDateChange}
          postLocation={postLocation}
          handlePostLocationChange={handlePostLocationChange}
          availableTags={availableTags}
          selectedTags={selectedTags}
          handleTagSelection={handleTagSelection}
          showTags={showTags}
          setShowTags={setShowTags}
        />
        <Carousel imageUrls={imageUrls} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      </Animated.ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          title="Publicar Evento"
          onPress={handlePostCreation}
          disabled={!isPostReady}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    width: '100%',
    position: 'absolute',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingTop: HEADER_HEIGHT, // Adiciona espaço para o header
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default CreatePostScreen;
