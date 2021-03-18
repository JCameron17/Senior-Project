import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Component, Text,TouchableWithoutFeedback, View,Image,SafeAreaView, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import MainTabScreen from './screens/MainTab';
import {DrawerContent} from './screens/DrawerContent';

const Drawer = createDrawerNavigator();
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent = {props => <DrawerContent {... props}/>}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
        <Drawer.Screen name="UserProfile" component={MainTabScreen} />
        <Drawer.Screen name="Notifications" component={MainTabScreen} />
        <Drawer.Screen name="Explore" component={MainTabScreen} />
        <Drawer.Screen name="Settings" component={MainTabScreen} />
      </Drawer.Navigator>
   </NavigationContainer> 
  );
}

export default App;


 /* */