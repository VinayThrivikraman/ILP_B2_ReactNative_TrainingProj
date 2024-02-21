import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "../../component/Button";

const Login = () => {

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <View style={styles.mainContainer}>
            <View>
                <Image 
                    style={styles.experionLogo}
                    source={require('../../assets/logo-dark.png')}
                />
            </View>
        
            <View style={styles.inputContainer}>
                <View>
                    <Text style={styles.emailHeading}>E-Mail</Text>
                </View>
                <TextInput 
                    style={styles.inputField}
                    value={email}
                    placeholder="E-Mail"
                    onChangeText={onChangeEmail}
                >
                </TextInput>
                
                <View>
                    <Text style={styles.passwordHeading}>Password</Text>
                </View>
                <TextInput 
                    style={styles.inputField}
                    value={password}
                    placeholder="Password"
                    onChangeText={onChangePassword}
                />
                
                <Button title='LOGIN' navigationPath='Signup'/>

                <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
            </View>
            <View>
                <Text style={styles.signupDescText}>Don't Have an Account? <Text style={styles.signupText}>Signup!</Text></Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create ({
    mainContainer: {
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'column',
        gap: 120,
    },
    experionLogo: {
        marginTop: 120,
        width: 205,
        height: 58,
    },
    inputContainer: {
        
    },
    inputField: {
        width: 340,
        height: 58,
        borderWidth: 1.5,
        borderColor: '#A1D5E3',
        borderRadius: 5,
        marginTop: -10,
        marginBottom: 20,
        paddingLeft: 20,
        zIndex: -1,
    },
    emailHeading: {
        marginLeft: 20,
        fontWeight: '500',
        color: 'black',
        backgroundColor: 'white',
        width: 40,
        height: 20,
        zIndex: 1,
    },
    passwordHeading: {
        marginLeft: 20,
        color: 'black',
        fontWeight: '500',
        backgroundColor: 'white',
        width: 65,
        height: 20,
        zIndex: 1,
    },
    forgetPasswordText: {
        textAlign: 'center',
        marginTop: 15,
        color: 'black',
    },
    signupDescText: {
        color: 'black'
    },
    signupText: {
        fontWeight: '500',
        color: '#E53F3F'
    }
})

export default Login;