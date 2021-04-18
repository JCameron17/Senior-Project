import React from 'react';
import { StyleSheet,Component, Text,TouchableWithoutFeedback, View,Image,SafeAreaView, Button, ScrollView } from 'react-native';


function NewsFeedScreen() 
{
    return (
      <View style={styles.container}>
        <Text>NewsFeedScreen</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})

export default NewsFeedScreen;