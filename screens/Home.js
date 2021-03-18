import React from 'react';
import { StyleSheet,Component, Text,TouchableWithoutFeedback, View,Image,SafeAreaView, Button, ScrollView } from 'react-native';

function HomeScreen({navigation}) 
{
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
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

export default HomeScreen;