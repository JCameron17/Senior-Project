import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


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
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={NotificationsScreen}
            options={{
              tabBarLabel: 'Updates',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={UserProfileScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
              tabBarLabel: 'Explore',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
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