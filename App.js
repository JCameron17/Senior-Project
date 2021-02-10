import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,TouchableWithoutFeedback, View,Image,SafeAreaView, Button } from 'react-native';

export default function App() 
{
  const handlePress = () => console.log("Text was clicked");
  
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>
        Hello React Native. 
      </Text>
      <TouchableWithoutFeedback onPress={() => console.log('Image was clicked')}>
        <Image 
           source={require("./assets/favicon.png")}
        />
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
      <Button title="Click Me" onPress={() => console.log("Button Tapped !")}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create(
  {
  container: 
  {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
