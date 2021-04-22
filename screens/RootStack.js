import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


import YMLogoScreen from './YMLogo';
import SignInScreen from './Signin';
import SignUpScreen from './Signup';
<<<<<<< HEAD
=======
import MainTabScreen from './MainTab'

>>>>>>> 81813acca534c04c84dd198acbada5c89332fccf

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="YMLogo" component={YMLogoScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;
