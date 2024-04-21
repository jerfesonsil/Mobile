import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

const PostsContainer = ({ data, renderItem, keyExtractor }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default PostsContainer;
