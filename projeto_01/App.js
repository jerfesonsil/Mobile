import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './MainScreen';
import PostDetailScreen from './PostDetailScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PostDetailScreen" component={PostDetailScreen} />
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
          tabBarLabel: 'Main',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          headerShown: false,
        }} 
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;













