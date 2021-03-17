import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Component, Text,TouchableWithoutFeedback, View,Image,SafeAreaView, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from '@react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';





import HomeScreen from './screens/Home';
import UserProfileScreen from './screens/UserProfile';




const HomeStack = createStackNavigator();
const UserProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) =>(
  <HomeStack.Navigator screenOptions=
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
    <HomeStack.Screen name="Home" component={HomeScreen} options={
      {
        title: 'Home',
        headerLeft:() => 
        (
          <Icon.Button name = 'ios-menu' size ={25} backgrounColor = {'green'} onPress = {() => navigation.openDrawer()} ></Icon.Button>
        )
      }
    }/>
  
  </HomeStack.Navigator>
)


const UserProfileStackScreen = ({navigation}) =>(
  <UserProfileStack.Navigator screenOptions=
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
    <UserProfileStack.Screen name="UserProfile" component={UserProfileScreen} options={
      {
        title: 'Home',
        headerLeft:() => 
        (
          <Icon.Button name = 'ios-menu' size ={25} backgrounColor = {'green'} onPress = {() => navigation.openDrawer()} ></Icon.Button>
        )
      }}/>
  </UserProfileStack.Navigator>
)



function App() {
  return (


    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="UserProfile" component={UserProfileStackScreen} />
      </Drawer.Navigator>
   </NavigationContainer> 
  );
}

export default App;


 /* */