import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/authentication/Login';
import Signup from '../screens/authentication/Signup';
import ForgotPassword from '../screens/authentication/forgotPassword';
import OTPScreen from '../screens/authentication/OTPScreen';

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
      <StackNav.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{
          headerShown: false,
        }}
      />
    </StackNav.Navigator>
  );
}
