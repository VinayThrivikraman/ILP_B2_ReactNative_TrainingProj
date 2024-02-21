import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/authentication/Login";
import Signup from "../screens/authentication/Signup";

const StackNav = createNativeStackNavigator();

export function LoginScreenNavigation() {
    return (
        <StackNav.Navigator>
            <StackNav.Screen
            name="Login"
            component={Login}
            options={{
                headerShown: false,
            }}
        />
        <StackNav.Screen 
            name="Signup"
            component={Signup}
            options={{
                headerShown: false,
            }}
        />
        </StackNav.Navigator>
    );
}