import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Button } from 'react-native';

const FormElements = ({
  postTitle,
  handlePostTitleChange,
  postContent,
  handlePostContentChange,
  postDate,
  handlePostDateChange,
  postLocation,
  handlePostLocationChange,
  availableTags,
  selectedTags,
  handleTagSelection,
  showTags,
  setShowTags,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título do Evento"
        value={postTitle}
        onChangeText={handlePostTitleChange}
      />
      <TextInput
        style={[styles.input, styles.multilineInput]}
        placeholder="Conteúdo do Evento"
        value={postContent}
        onChangeText={handlePostContentChange}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Data do Evento (DD/MM/YYYY)"
        value={postDate}
        onChangeText={handlePostDateChange}
        keyboardType="numeric"
        maxLength={10}
      />
      <TextInput
        style={styles.input}
        placeholder="Local do Evento"
        value={postLocation}
        onChangeText={handlePostLocationChange}
      />
      <View style={styles.tagsContainer}>
        <Text style={styles.tagsTitle}>Tags do Evento:</Text>
        {showTags && (
          <View style={styles.tagButtonsContainer}>
            {availableTags.map((tag, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.tagButton, selectedTags.includes(tag) ? styles.selectedTagButton : null]}
                onPress={() => handleTagSelection(tag)}
              >
                <Text style={styles.tagButtonText}>{tag}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <Button
          title={showTags ? 'Ocultar Tags' : 'Mostrar Tags'}
          onPress={() => setShowTags(!showTags)}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  input: {
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 16,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  tagsContainer: {
    marginBottom: 20,
  },
  tagsTitle: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  tagButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tagButton: {
    backgroundColor: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  selectedTagButton: {
    backgroundColor: '#007bff',
  },
  tagButtonText: {
    color: '#333',
    fontSize: 16,
  },
};

export default FormElements;
