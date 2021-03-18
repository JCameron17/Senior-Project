import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from './Home';
import UserProfileScreen from './UserProfile';
import ExploreScreen from './Explore';
import NotificationsScreen from './Notifications';

const HomeStack = createStackNavigator();
const UserProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () =>{

    return (
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#e91e63"
          barStyle={{ backgroundColor: 'tomato' }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <Icons name="ios-home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={NotificationsScreen}
            options={{
              tabBarLabel: 'Updates',
              tabBarIcon: ({ color }) => (
                <Icons name="ios-notifications" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={UserProfileStackScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <Icons name="ios-person" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
              tabBarLabel: 'Explore',
              tabBarIcon: ({ color }) => (
                <Icons name="ios-aperture" color={color} size={26} />
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

export default MainTabScreen;