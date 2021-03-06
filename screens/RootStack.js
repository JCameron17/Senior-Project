import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


import YMLogoScreen from './YMLogo';
import SignInScreen from './Signin';
import SignUpScreen from './Signup';
import MainTabScreen from './MainTab'


const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="YMLogo" component={YMLogoScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;
