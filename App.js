import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text,TouchableWithoutFeedback, View,Image,SafeAreaView, Button, ScrollView } from 'react-native';
=======
import React from 'react';
import { StyleSheet,Component, Text,TouchableWithoutFeedback, View,Image,SafeAreaView, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
>>>>>>> 7c5539e89b3a3f00eef9ab4bf55fb64cb146b85d


import MainTabScreen from './screens/MainTab';
import {DrawerContent} from './screens/DrawerContent';
import RootStackScreen from './screens/RootStack'

const Drawer = createDrawerNavigator();
function App() {
  return (
    <NavigationContainer>
      <RootStackScreen/>
    {/*
      <Drawer.Navigator drawerContent = {props => <DrawerContent {... props}/>}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      </Drawer.Navigator>
    */}
   </NavigationContainer> 
    
  );
}

export default App;


