// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.3.3/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.3.3/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyBTaEPxAXU85mYnifVklDJcHFPBjBiG9c0",
//     authDomain: "young-money-b2c99.firebaseapp.com",
//     projectId: "young-money-b2c99",
//     storageBucket: "young-money-b2c99.appspot.com",
//     messagingSenderId: "481209506884",
//     appId: "1:481209506884:web:7013fd439a16d79cf37011",
//     measurementId: "G-WSL0W83L80"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>

import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Component, Text,TouchableWithoutFeedback, View,Image,SafeAreaView, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import firebase from '@react-native-firebase/app';
firebase.initializeApp(firebaseConfig)

import MainTabScreen from './screens/MainTab';
import {DrawerContent} from './screens/DrawerContent';
import RootStackScreen from './screens/RootStack'
import { firebaseConfig } from './config';

const Drawer = createDrawerNavigator();
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent = {props => <DrawerContent {... props}/>}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      </Drawer.Navigator>
   </NavigationContainer> 
    
  );
}

export default App;