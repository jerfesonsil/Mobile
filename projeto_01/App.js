import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './MainScreen';
import PostDetailScreen from './PostDetailScreen';
import CreatePostScreen from './CreatePostScreen';
import LoginScreen from './LoginScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PostDetailScreen" component={PostDetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="MainTab" 
        component={MainStack} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          headerShown: false,
        }} 
      />
      <Tab.Screen 
        name="CreatePost" 
        component={CreatePostScreen} 
        options={{
          tabBarLabel: 'Create Post',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" size={size} color={color} />
          ),
          headerShown: false,
        }} 
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username.trim() !== '' && password.trim() !== '') {
      setLoggedIn(true);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loggedIn ? (
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="LoginScreen"
            options={{ headerShown: false }}
          >
            {props => <LoginScreen {...props} onLogin={handleLogin} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;