import { useNavigation } from "@react-navigation/native";
import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

const Button = ({ title, navigationPath }: any) => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate(navigationPath, {});
    }

    return (
        <TouchableOpacity 
            style={styles.loginButton}
            onPress={onPress}
        >
        <Text style={styles.loginText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create ({
    loginButton: {
        alignItems: 'center',
        justifyContent:'space-around',
        width: 340,
        height: 58,
        borderRadius: 5,
        backgroundColor: '#A1D5E3',
        marginTop: 5,
    },
    loginText: {
        fontSize: 20,
        fontWeight: '900',
        color: 'black',
    },
})

export default Button;

