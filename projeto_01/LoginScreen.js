// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { db } from './firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = ({ navigation, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const q = query(collection(db, 'users'), where('username', '==', username), where('password', '==', password));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        console.log('Login successful!');
        onLogin(username, password);
      } else {
        console.log('Invalid username or password.');
      }
    } catch (error) {
      console.error('Error logging in: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.juntai} source={require('./assets/JuntAí.png')} />
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate('CreateAccount')}>
        <Text style={styles.createAccountButtonText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {},
  juntai: {
    height: windowHeight * 0.20,
    width: windowWidth * 0.70,
    resizeMode: 'contain',
  },
  input: {
    width: '80%',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  createAccountButton: {
    marginTop: 20,
  },
  createAccountButtonText: {
    color: 'blue',
    textAlign: 'center',
  },
});

export default LoginScreen;
