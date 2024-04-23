import React, { useState } from 'react';
import { View, StyleSheet, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './components/Header';
import FormElements from './components/FormElements';

const CreatePostScreen = () => {
  const navigation = useNavigation();

  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postDate, setPostDate] = useState('');
  const [postLocation, setPostLocation] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [showTags, setShowTags] = useState(false); // Estado para mostrar ou ocultar as tags

  const availableTags = [
    'Churrasco', 
    'Concerto', 
    'Festival', 
    'Show', 
    'Workshop', 
    'Música Eletrônica', 
    'Forró', 
    'Sertanejo', 
    'Open Bar', 
    'Ar Livre',
    'Balada',
    'Piquenique',
    'Carnaval',
    'Feira',
    'Exposição',
    'Rave',
    'Aniversário',
    'Casamento',
    'Encontro Cultural',
    'Feira Gastronômica',
  ];

  const handlePostTitleChange = (text) => {
    setPostTitle(text);
  };

  const handlePostContentChange = (text) => {
    setPostContent(text);
  };

  const handlePostDateChange = (text) => {
    // Formatando a data para "DD/MM/YYYY"
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

  const handlePostCreation = () => {
    console.log('Título do Post:', postTitle);
    console.log('Conteúdo do Post:', postContent);
    console.log('Data do Evento:', postDate);
    console.log('Local do Evento:', postLocation);
    console.log('Tags do Evento:', selectedTags);

    setPostTitle('');
    setPostContent('');
    setPostDate('');
    setPostLocation('');
    setSelectedTags([]);

    navigation.navigate('MainScreen');
  };

  const isPostReady =
    postTitle.trim() !== '' &&
    postContent.trim() !== '' &&
    postDate.trim() !== '' &&
    postLocation.trim() !== '';

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
      </ScrollView>
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
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default CreatePostScreen;
