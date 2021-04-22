import React from 'react';
import { 
    View,
    Button,
    Dimensions,
    Text, 
    TouchableOpacity,
    Image, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {MaterialIcons} from "react-native-vector-icons/MaterialIcons"

const YMLogoScreen = ({navigation}) => 
{
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    
                    source={require('../assets/youngmoneylogo.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <View style={styles.footer}>
                <Text style = {styles.title}>Building wealth for the next generation ! </Text>
                <Text style ={styles.text} > Signin with an account</Text>
                <View style= {styles.button}>
                    <TouchableOpacity onPress = {()=>navigation.navigate('SignInScreen')}>
                        <LinearGradient
                            colors ={['green','green']}
                            style = {styles.signIn}
                        >
                            <Text style = {styles.textSign}>Get Started</Text>
                             {/* <MaterialIcons 
                                name="navigate-next"
                                color="#fff"
                                size={20}
                            />  */}
                        </LinearGradient>
                    </TouchableOpacity>
                </View> 
            </View>
        </View>
    )
}

export default YMLogoScreen;


const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});

