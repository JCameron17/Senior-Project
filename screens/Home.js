import React from 'react';
import { StyleSheet,Component, Text,TouchableWithoutFeedback, View,Image,SafeAreaView, Button, ScrollView } from 'react-native';

function HomeScreen({navigation}) 
{
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <Button>
          title = "Go to UserProfileScreen"
          onPress= {() =>navigation.navigate("UserProflie")}
        </Button>
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

export default HomesScreen;