import React from 'react';
import { StyleSheet,Component, Text,TouchableWithoutFeedback, View,Image,SafeAreaView, Alert, Button, ScrollView } from 'react-native';


function NotificationsScreen() 
{
    return (
      <View style={styles.container}>
        <Text>Notifications Screen</Text>

        <Button
        title="Money Minute"
        color="#f194ff"
        onPress={() => Alert.alert('Money Minute! Give the 80 20 method a try.')}
      />

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

export default NotificationsScreen;