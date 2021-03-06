

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

import { AuthContext } from '../components/context';


// import * as Google from 'expo-google-app-auth';

// import firebase from 'firebase';

// import {firebaseConfig} from './config';

const SignInScreen = ({navigation}) => 
{

    // async function signInWithGoogleAsync () {
    //     try {
    //       const result = await Google.logInAsync({
    //         //androidClientId: YOUR_CLIENT_ID_HERE,
    //         behavior: 'web',
    //         iosClientId: '481209506884-5t2ekj65irrj3m21jj6phsncjrpt0bn8.apps.googleusercontent.com',
    //         scopes: ['profile', 'email'],
    //       });
      
    //       if (result.type === 'success') {
    //         return result.accessToken;
    //       } else {
    //         return { cancelled: true };
    //       }
    //     } catch (e) {
    //       return { error: true };
    //     }
    // }




    const [data,setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true

    });

    const {signIn} = React.useContext(AuthContext);


     const textInputChange = (val) => {
         if (val.length != 0)
        {
             setData({
                 ...data,
                 username:val,
                 check_textInputChange:true
             })
         }else
         {
            setData({
                ...data,
                username:val,
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

    const loginHandle = (username,password) => {
        signIn(username,password);
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

                <TouchableOpacity>
                    <Text style = {{color:'black',marginTop:15}}> Forgot Password ? </Text>
                </TouchableOpacity>
                
                <View >
                    <TouchableOpacity
                        style = {styles.signIn}
                        onPress={() => {loginHandle(data.username,data.password)}}
                    >    
                        <LinearGradient
                            colors = {['green','green']}
                            style = {styles.signIn}
                        >
                            <Text style = {[styles.textSign,{
                                color:'white'}]}>Sign In 
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    

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