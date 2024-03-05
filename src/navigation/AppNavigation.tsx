import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomePage from '../screens/HomePage';
import ProfilePage from '../screens/ProfilePage';
import {MainStackNavigation} from './MainStackNavigation';

const BottomNav = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <BottomNav.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 80,
        },
        tabBarLabelStyle: {
          marginBottom: 10,
          fontSize: 15,
          color: '#6D8B92',
        },
      }}>
      <BottomNav.Screen
        name="Home"
        component={MainStackNavigation}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialIcons name="contacts" size={30} color={'#6D8B92'} />
          ),
        }}
      />
      <BottomNav.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialIcons name="person" size={35} color={'#6D8B92'} />
          ),
        }}
      />
    </BottomNav.Navigator>
  );
}
