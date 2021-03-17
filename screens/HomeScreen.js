import React from 'react';
import { StyleSheet,Component, Text,TouchableWithoutFeedback, View,Image,SafeAreaView, Button, ScrollView } from 'react-native';

function HomeScreen({navigation}) 
{
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button>
          title = "Go to UserProfileScreen"
          onPress= {() =>navigation.navigate("UserProflie")}
        </Button>
      </View>
    );
  }