import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Component, Text,TouchableWithoutFeedback, View,Image,SafeAreaView, Button, ScrollView } from 'react-native';

export default function App() 
{
  const handlePress = () => console.log("Text was clicked");
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image source={require("./assets/adaptive-icon.png")} style={styles.image} resizeMode="center"></Image>
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

        <View style={{ marginTop: 32 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.mediaImageContainer}>
              <Image source={require("./assets/media1.jpg")} style={styles.image} resizeMode="cover"></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image source={require("./assets/media2.jpg")} style={styles.image} resizeMode="cover"></Image>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image source={require("./assets/media3.jpg")} style={styles.image} resizeMode="cover"></Image>
            </View>
          </ScrollView>
          <View style={styles.mediaCount}>
            <Text style={[styles.text, { fontSize: 24, color: "#DFD8C8", fontWeight: "300" }]}>70</Text>
            <Text style={[styles.text, { fontSize: 12, color: "#DFD8C8", textTransform: "uppercase" }]}>Media</Text>
          </View>
        </View>  
                 
      
        <StatusBar style="auto" />
      
      </ScrollView>
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
  },
  mediaImageContainer: 
  {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10
  },
  mediaCount: 
  {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1
  },
  recent: 
  {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10
  }
});
