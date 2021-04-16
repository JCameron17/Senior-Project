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
import { StyleSheet,Component, Text,TouchableWithoutFeedback, View,Image,SafeAreaView, Button, ScrollView, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import MainTabScreen from './screens/MainTab';
import {DrawerContent} from './screens/DrawerContent';
import RootStackScreen from './screens/RootStack'
import { useEffect } from 'react';
//import { firebaseConfig } from './screens/config';
import { AuthContext } from './components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

 

const Drawer = createDrawerNavigator();

function App() {
  

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) =>{
      

      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;

      try {
        await AsyncStorage.setItem('userToken',userToken)
      } catch(e){
        console.log(e);
      }
      
      dispatch({ type:'LOGIN', id: userName, token:userToken});
    },
    signOut: async() => {
      
      try {
        await AsyncStorage.removeItem('userToken')
      } catch(e){
        console.log(e);
      }
      dispatch({type:'LOGOUT'});
    },
    signUp: () => {
    },
  }),[])

  useEffect(() => {
    setTimeout(async() => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e){
        console.log(e);
      }
     // setIsLoading(false);
     dispatch({type:'RETRIEVE_TOKEN',token:userToken});
    },1000);
  },[]);


  if (loginState.isLoading == true)
  {
    return(
      <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size = "large"/>
      </View>
    );
  }

  return (
    <AuthContext.Provider value = {authContext}>
    <NavigationContainer>
      {loginState.userToken !== null ? (
        <Drawer.Navigator drawerContent = {props => <DrawerContent {... props}/>}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        </Drawer.Navigator> 
      )
      :
        <RootStackScreen/>
      }
    </NavigationContainer> 
    </AuthContext.Provider>
  );
}

export default App;