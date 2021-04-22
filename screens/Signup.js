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

const SignInScreen = ({navigation}) => 
{
    const {signUp} = React.useContext(AuthContext);


    const [data,setData] = React.useState({
        username: '',
        password: '',
        confirm_password: 'pass1234',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true

    });

    const { signIn } = React.useContext(AuthContext);


     const textInputChange = (val) => 
     {
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

     const handlePasswordChange = (val) => 
     {
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
    
    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }


    const loginHandle = (userName, password) => {

        const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } );

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( data.password != data.confirm_password ) {
            Alert.alert('Wrong Input!', 'Passwords do no match or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }
  
    
    return(
        <View style={styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.text_header}>Register Now !</Text>
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

                <Text style={[styles.text_footer, {color:'black',marginTop: 35}]}> Confirm Password</Text>
                <View style = {styles.action}>
                    <FontAwesome
                        name = "lock"
                        color = "blue"
                        size= {20}
                    />
                    <TextInput
                        placeholder= "Confirm Your Password"
                        secureTextEntry = {data.confirm_secureTextEntry ? true : false}
                        style= {styles.textInput}
                        autoCapitalize = "none"
                        onChangeText = {(val) => handleConfirmPasswordChange(val)}

                    />
                    <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
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
                    <TouchableOpacity
                        style = {styles.signIn}
                        onPress={() => {loginHandle( data.username, data.password )}}
                    >
                        <LinearGradient
                            colors = {['green','green']}
                            style = {styles.signIn}

                        >
                            <Text style = {[styles.textSign,{
                            color:'white'}]}>Sign Up 
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress = {() => navigation.goBack()}
                        style = {[styles.signIn, {
                            borderColor:'green',
                            borderWidth:1,
                            marginTop:15
                        }]}
                    >
                        <Text style = {[styles.textSign, {
                            color:'green'
                        }]}>Sign In
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