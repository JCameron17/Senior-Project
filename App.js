import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,TouchableWithoutFeedback, View,Image,SafeAreaView, Button, ScrollView } from 'react-native';

export default function App() 
{
  const handlePress = () => console.log("Text was clicked");
  
  return (
    <SafeAreaView style={styles.container}>

      <View style={{ alignSelf: "center" }}>
        <View style={styles.profileImage}>
          <Image source={require("./assets/icon.png")} style={styles.image} resizeMode="center"></Image>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Julie</Text>
        <Text style={[styles.text, { color: "black", fontSize: 14 }]}>Photographer</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statsBox}>
          <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
          <Text style={[styles.text, styles.subText]}>Posts</Text>
        </View>

        <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 3, borderRightWidth: 3 }]}>
          <Text style={[styles.text, { fontSize: 24 }]}>455</Text>
          <Text style={[styles.text, styles.subText]}>Followers</Text>
        </View>
        
        <View style={styles.statsBox}>
          <Text style={[styles.text, { fontSize: 24 }]}>302</Text>
          <Text style={[styles.text, styles.subText]}>Following</Text>
        </View>

      </View>  
                 
      
      <StatusBar style="auto" />
      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create(
{
  container: 
  {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileImage: 
  {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden"
  },
  
  image: 
  {
    flex: 1,
    height: undefined,
    width: undefined
  },

  infoContainer: 
  {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16
  },
  text: 
  {
    color: "black"
  },
  statsContainer: 
  {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32
  },
  statsBox: 
  {
  alignItems: "center",
  flex: 1,
  
  },
  subText: 
  {
    fontSize: 14,
    color: "black",
    textTransform: "uppercase",
    fontWeight: "500"
  }
});
