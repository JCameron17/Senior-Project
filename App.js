import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Component, Text,TouchableWithoutFeedback, View,Image,SafeAreaView, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './screens/HomeScreen';
import UserProfile from './screens/UserProfile';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions=
      {
        {
          headerStlye:
          {
            backgrounColor: 'green'
          },
          headerTintColor:'white',
          headerTitleStyle:
          {
            fontWeight:'bold'
          }
        }
      }>
        <Stack.Screen name="Home" component={HomeScreen} options={}/>
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;
