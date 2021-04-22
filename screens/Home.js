import { Link } from '@react-navigation/native';
import React from 'react';
import { StyleSheet,Component, Text,TouchableWithoutFeedback, View,Image,SafeAreaView, Button, ScrollView, Linking } from 'react-native';

import { Title } from 'react-native-paper';


function HomeScreen() 
{
    return (
      <View style={styles.container}>
        <ScrollView>
        <Title style={styles.TextStyle1}>{"\n"}Headlines</Title>
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://finance.yahoo.com/news/netflix-stock-craters-after-subscriber-miss-is-now-a-great-time-to-buy-110254909.html') } >{"\n"}Netflix stock craters after subscriber miss — is now a great time to buy?</Text>
        <Image source = {require("./src/img/netflix.png")} style = {{ width: 375, height: 200 }} />



        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://www.cnbc.com/2021/04/22/stocks-making-the-biggest-moves-midday-att-dow-fisker-southwest-airlines-more.html') } >{"\n"}{"\n"}Stocks making the biggest moves midday: ATT, Dow, Fisker, Southwest Airlines and more</Text>
        <Image source = {require("./src/img/flight.png")} style = {{ width: 375, height: 200 }} />
       
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://finance.yahoo.com/news/stock-market-news-live-updates-april-22-2021-221304988.html') } >{"\n"}{"\n"}Stocks drift sideways, steadying amid earnings, economic data</Text>
        <Image source = {require("./src/img/finance1.png")} style = {{ width: 375, height: 200 }} />
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#D3D3D3'
    },
    TextStyle: {
      color: 'black',
      textAlign: 'center',
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      fontSize: 18,
      width: 375
    },
    TextStyle1: {
      color: 'black',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 30,
    
      width: 375
    }
    
})

export default HomeScreen;