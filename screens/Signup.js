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
    Alert
} from 'react-native';


const SignUpScreen = () => 
{
    
    return(
        <View style={styles.container}>
            <Text> SignUpScreen </Text>
            <Button
                title= "Click Here"
                onPress={() => alert('Button Clicked')}
            />
        </View>
    )
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container:
    {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})