import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from './Home';
import UserProfileScreen from './UserProfile';
import ExploreScreen from './Explore';
import NotificationsScreen from './Notifications';
import MessagesScreen from './Messages';

const HomeStack = createStackNavigator();
const UserProfileStack = createStackNavigator();
const NotificationsStack = createStackNavigator();
const MessagesStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () =>{

    return (
        <Tab.Navigator
          initialRouteName="Profile"
          activeColor="white"
          barStyle={{ backgroundColor: 'white' }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor: 'green',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Explore"
            component={ExploreStackScreen}
            options={{
              tabBarLabel: 'Explore',
              tabBarColor: 'green',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-aperture" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Messages"
            component={MessagesStackScreen}
            options={{
              tabBarLabel: 'Messages',
              tabBarColor: 'green',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-chatbubbles" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={UserProfileStackScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarColor: 'green',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-person" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
    );
}

const HomeStackScreen = ({navigation}) =>(
  <HomeStack.Navigator screenOptions=
  {
    {
      headerStyle:
      {
        backgroundColor: 'green'
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

const ExploreStackScreen = ({navigation}) =>(
  <ExploreStack.Navigator screenOptions=
  {
    {
      headerStyle:
      {
        backgroundColor: 'green'
      },
      headerTintColor:'white',
      headerTitleStyle:
      {
        fontWeight:'bold'
      }
    }
  }>
    <ExploreStack.Screen name="Explore" component={ExploreScreen} options={
      {
        title: 'Explore',
        headerLeft:() => 
        (
          <Icon.Button name = 'ios-menu' size ={25} backgrounColor = {'green'} onPress = {() => navigation.openDrawer()} ></Icon.Button>
        )
      }
    }/>
  
  </ExploreStack.Navigator>
)

const MessagesStackScreen = ({navigation}) =>(
  <MessagesStack.Navigator screenOptions=
  {
    {
      headerStyle:
      {
        backgroundColor: 'green'
      },
      headerTintColor:'white',
      headerTitleStyle:
      {
        fontWeight:'bold'
      }
    }
  }>
    <MessagesStack.Screen name="Messages" component={MessagesScreen} options={
      {
        title: 'Messages',
        headerLeft:() => 
        (
          <Icon.Button name = 'ios-menu' size ={25} backgrounColor = {'green'} onPress = {() => navigation.openDrawer()} ></Icon.Button>
        )
      }
    }/>
  
  </MessagesStack.Navigator>
)
/*
const NotificationsStackScreen = ({navigation}) =>(
  <NotificationsStack.Navigator screenOptions=
  {
    {
      headerStyle:
      {
        backgroundColor: 'green'
      },
      headerTintColor:'white',
      headerTitleStyle:
      {
        fontWeight:'bold'
      }
    }
  }>
    <NotificationsStack.Screen name="Notifications" component={NotificationsScreen} options={
      {
        title: 'Notifications',
        headerLeft:() => 
        (
          <Icon.Button name = 'ios-menu' size ={25} backgrounColor = {'green'} onPress = {() => navigation.openDrawer()} ></Icon.Button>
        )
      }
    }/>
  
  </NotificationsStack.Navigator>
) */

const UserProfileStackScreen = ({navigation}) =>(
  <UserProfileStack.Navigator screenOptions=
  {
    {
      headerStyle:
      {
        backgroundColor: 'green'
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
        title: 'User Profile',
        headerLeft:() => 
        (
          <Icon.Button name = 'ios-menu' size ={25} backgrounColor = {'green'} onPress = {() => navigation.openDrawer()} ></Icon.Button>
        )
      }}/>
  </UserProfileStack.Navigator>
)

export default MainTabScreen;