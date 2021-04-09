// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.3.3/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.3.3/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyBTaEPxAXU85mYnifVklDJcHFPBjBiG9c0",
//     authDomain: "young-money-b2c99.firebaseapp.com",
//     projectId: "young-money-b2c99",
//     storageBucket: "young-money-b2c99.appspot.com",
//     messagingSenderId: "481209506884",
//     appId: "1:481209506884:web:7013fd439a16d79cf37011",
//     measurementId: "G-WSL0W83L80"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>

import React from 'react';
import { 
    View,
    Button,
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert, 
    Dimensions
} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {MaterialIcons} from "react-native-vector-icons/MaterialIcons";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignInScreen = ({navigation}) => 
{
    const [data,setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true

    });

     const textInputChange = (val) => {
         if (val.length != 0)
        {
             setData({
                 ...data,
                 email:val,
                 check_textInputChange:true
             })
         }else
         {
            setData({
                ...data,
                email:val,
                check_textInputChange:false
            })
         }
     }

     const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
  
    
    return(
        <View style={styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.text_header}>Welcome !</Text>
            </View>
            <View style = {styles.footer}>
                <Text style = {styles.text_footer}>Email</Text>
                <View style = {styles.action}>
                    <FontAwesome
                        name = "user-o"
                        color = "blue"
                        size= {20}
                    />
                    <TextInput
                        placeholder= "Your Email"
                        style= {styles.textInput}
                        autoCapitalize = "none"
                        onChangeText = {(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange?
                    <Feather
                        name = "check-circle"
                        color = "green"
                        size = {20}
                    />
                    :null}
                </View>
                <Text style={[styles.text_footer, {color:'black',marginTop: 35}]}>Password</Text>
                <View style = {styles.action}>
                    <FontAwesome
                        name = "lock"
                        color = "blue"
                        size= {20}
                    />
                    <TextInput
                        placeholder= "Your Password"
                        secureTextEntry = {data.secureTextEntry ? true : false}
                        style= {styles.textInput}
                        autoCapitalize = "none"
                        onChangeText = {(val) => handlePasswordChange(val)}

                    />
                    <TouchableOpacity
                    onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ? 
                        <Feather 
                            name="eye-off"
                            color="grey"
                            size={20}
                        />
                        :
                        <Feather 
                            name="eye"
                            color="grey"
                            size={20}
                        />
                        }
                    </TouchableOpacity>
                </View>
                
                <View>
                    <LinearGradient
                        colors = {['green','green']}
                        style = {styles.signIn}

                    >
                        <Text style = {[styles.textSign,{
                            color:'white'}]}>Sign In 
                        </Text>
                    </LinearGradient>

                    <TouchableOpacity
                        onPress = {() => navigation.navigate('SignUpScreen')}
                        style = {[styles.signIn, {
                            borderColor:'green',
                            borderWidth:1,
                            marginTop:15
                        }]}
                    >
                        <Text style = {[styles.textSign, {
                            color:'green'
                        }]}>Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SignInScreen;



const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });